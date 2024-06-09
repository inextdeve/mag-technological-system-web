import GlassCard from "@/components/glassmorphism/glass-card";
import FacebookIcon from "@/components/icons/login/facebook";
import GoogleIcon from "@/components/icons/login/google";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="col-span-2 lg:flex items-center justify-center hidden">
        <h1 className=" text-6xl font-semibold">Signup.</h1>
      </div>
      <div className="login-container relative flex justify-center">
        <GlassCard className="p-8 pt-20 pb-5 max-w-[390px]">
          <h2 className="text-2xl font-bold">Signup</h2>
          <span className="text-sm font-semibold">
            Just some details to get you in.!
          </span>
          <div className="grid gap-6 mt-5">
            <Input
              variant="bordered"
              label="Username"
              autoComplete="none"
              classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
            />
            <Input
              variant="bordered"
              label="Email / Phone"
              autoComplete="none"
              classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
            />
            <Input
              type="password"
              variant="bordered"
              label="Password"
              autoComplete="none"
              classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
            />
            <Input
              type="password"
              variant="bordered"
              label="Confirm Password"
              autoComplete="none"
              classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
            />
            <div className="grid gap-2">
              <Button className="bg-gradient-to-r from-blue-400 to-blue-900 text-white shadow-lg font-semibold py-6">
                Signup
              </Button>
            </div>
          </div>
          {/* open auth */}
          <fieldset className="border-2 border-x-0 border-b-0 border-solid border-gray-700 px-6 pb-3 mt-6">
            <legend className=" text-center px-1 text-gray-700">Or</legend>
          </fieldset>
          <div className="flex justify-center">
            <Button variant="light">
              <GoogleIcon />
            </Button>
            <Button variant="light">
              <FacebookIcon />
            </Button>
          </div>
          <div className="pt-10">
            <Link
              className="text-sm font-medium text-center block"
              href="/login"
            >
              Already registred ? <span className="font-semibold">Login</span>
            </Link>
            <div className="flex justify-between mt-4">
              <Link className="text-sm text-center" href="/terms">
                Terms &amp; Conditions
              </Link>
              <Link className="text-sm text-center" href="/support">
                Support
              </Link>
              <Link className="text-sm text-center" href="/customer-care">
                Customer Care
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </>
  );
};

export default Page;
