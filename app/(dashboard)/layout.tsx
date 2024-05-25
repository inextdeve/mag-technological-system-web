"use client";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/layout";
import CachingController from "@/CachingController";
import SocketController from "@/SocketController";
import preloadImages from "@/map/core/preloadImages";
import useAuth from "@/components/hooks/useAuth";
import { Progress } from "@nextui-org/react";

preloadImages();

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [initialized] = useAuth();

  return (
    <>
      {!initialized ? (
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="min-w-full"
        />
      ) : (
        <Layout>
          <SocketController />
          <CachingController />
          {children}
        </Layout>
      )}
    </>
  );
}
