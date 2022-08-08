import { useEffect } from "react";

import Head from "next/head";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/planets/mercury");
  }, [router]);
  return null;
}
