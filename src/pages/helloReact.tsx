import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page" key={111}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>hellohellohellohellohellohellohello</p>
        <div>测试测试测试</div>
      </div>
    </Layout>
  );
}
