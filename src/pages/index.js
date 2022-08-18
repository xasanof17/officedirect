import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Office Direct</title>
      </Head>
      <div className=" bg-slate-300 py-5">
        <h1 className="text-2xl underline text-blue bg-slate-600 mx-5">Hello World</h1>
      </div>
    </>
  );
}
