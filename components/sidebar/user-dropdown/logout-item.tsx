//@ts-nocheck
import { nativePostMessage } from "@/components/common/NativeInterface";
import { useAppDispatch, useAppSelector } from "@/components/hooks/rtk";
import { sessionActions } from "@/store";
import { useRouter } from "next/navigation";

const LogoutItem = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.session.user);
  const router = useRouter();

  const handleLogout = async () => {
    const notificationToken = window.localStorage.getItem("notificationToken");
    if (notificationToken && !user?.readonly) {
      window.localStorage.removeItem("notificationToken");
      const tokens = user?.attributes.notificationTokens?.split(",") || [];
      if (tokens.includes(notificationToken)) {
        const updatedUser = {
          ...user,
          attributes: {
            ...user?.attributes,
            notificationTokens:
              tokens.length > 1
                ? tokens.filter((it) => it !== notificationToken).join(",")
                : undefined,
          },
        };
        await fetch(`/api/users/${user?.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        });
      }
    }

    await fetch("/api/session", { method: "DELETE" });
    nativePostMessage("logout");
    router.push("/login");
    dispatch(sessionActions.updateUser(null));
  };

  return (
    <span
      onClick={handleLogout}
      className="absolute inset-0 pl-2 vertical-center leading-7"
    >
      Log Out
    </span>
  );
};

export default LogoutItem;
