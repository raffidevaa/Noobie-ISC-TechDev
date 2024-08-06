'use client';
import Layout from "@/layout/Layout";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <Layout withFooter={true}>
    <div className="h-screen bg-first">
      <Button>Click me</Button>
    </div>
    </Layout>
  );
}
