import GlassCard from "@/components/glassmorphism/glass-card";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="col-span-2 flex items-center justify-center">
        <h1 className=" text-6xl font-semibold">Forgot Password ?</h1>
      </div>
      <div className="login-container relative">
        <GlassCard className="p-8 pt-20 pb-5 max-w-[390px]">
          <h2 className="text-2xl font-bold">Forgot Password ?</h2>
          <span className="text-sm font-semibold">
            Please enter you’re email
          </span>
          <div className="grid gap-6 mt-5">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              autoComplete="none"
              classNames={{ inputWrapper: ["border-white border-[1.5px]"] }}
            />
            <div className="grid gap-2">
              <Button className="bg-gradient-to-r from-pink-400 to-pink-900 text-white shadow-lg font-semibold py-6">
                Reset Password
              </Button>
            </div>
          </div>
          <div className="pt-10">
            <Link
              className="text-sm font-medium text-center block"
              href="/signup"
            >
              Don&apos;t have an account ?{" "}
              <span className="font-semibold">Signup</span>
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
