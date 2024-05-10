"use client";

import Attention from "@/components/attention-icon";
import Link from "next/link";
import styled from "styled-components";

const Div404 = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 100px;
`;

export default function NotFound() {
  return (
    <div>
      <Div404>
        <h1>Sorry, we couldn't find nothing here :/</h1>
        <Attention />
        <h2>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            Go back
          </Link>
        </h2>
      </Div404>
    </div>
  );
}
