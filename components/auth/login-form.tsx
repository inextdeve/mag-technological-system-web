"use client";
import { sessionActions } from "@/store";
import { Button, Checkbox, Input } from "@nextui-org/react";
import dayjs from "dayjs";
import { MouseEventHandler, ReactEventHandler, useState } from "react";
import {
  handleLoginTokenListeners,
  nativeEnvironment,
  nativePostMessage,
} from "../common/NativeInterface";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);
  const [code, setCode] = useState("");
  const [codeEnabled, setCodeEnabled] = useState(false);

  const generateLoginToken = async () => {
    if (nativeEnvironment) {
      let token = "";
      try {
        const expiration = dayjs().add(6, "months").toISOString();
        const response = await fetch("/api/session/token", {
          method: "POST",
          body: new URLSearchParams(`expiration=${expiration}`),
        });
        if (response.ok) {
          token = await response.text();
        }
      } catch (error) {
        token = "";
      }

      nativePostMessage(`login|${token}`);
    }
  };

  const handlePasswordLogin = async () => {
    setFailed(false);
    try {
      const query = `email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`;
      const response = await fetch("/api/session", {
        method: "POST",
        body: new URLSearchParams(
          code.length ? `${query}&code=${code}` : query
        ),
      });
      if (response.ok) {
        const user = await response.json();
        console.log("Successfuuly");
        generateLoginToken();
        dispatch(sessionActions.updateUser(user));
        router.push("/");
      } else if (
        response.status === 401 &&
        response.headers.get("WWW-Authenticate") === "TOTP"
      ) {
        setCodeEnabled(true);
      } else {
        console.log("Failed");
        throw Error(await response.text());
      }
    } catch (error) {
      setFailed(true);
      setPassword("");
    }
  };

  return (
    <form className="grid gap-6 mt-5">
      <Input
        type="text"
        variant="bordered"
        label="Username"
        autoComplete="none"
        classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
        value={email}
        onChange={(v) => setEmail(v.target.value)}
      />
      <Input
        type="password"
        variant="bordered"
        label="Password"
        autoComplete="none"
        classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
        value={password}
        onChange={(v) => setPassword(v.target.value)}
      />
      <Checkbox defaultSelected size="sm" color="secondary">
        Remember me
      </Checkbox>
      <Button
        type="button"
        onClick={handlePasswordLogin}
        className="bg-gradient-to-r from-blue-400 to-purple-900 text-white shadow-lg font-semibold py-6"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
