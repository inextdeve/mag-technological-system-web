"use client";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/layout";
import CachingController from "@/CachingController";
import SocketController from "@/SocketController";
import preloadImages from "@/map/core/preloadImages";

preloadImages();

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <SocketController />
      <CachingController />
      {children}
    </Layout>
  );
}
