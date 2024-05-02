"use client";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
