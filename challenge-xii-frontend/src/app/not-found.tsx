"use client";

import Attention from "@/components/Section03/attention-icon";
import Link from "next/link";
import styled from "styled-components";

const Div404 = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin: auto;
  padding-bottom: 250px;
  flex-wrap: wrap;
  @media (max-width: 1440px) {
    padding-top: 400px;
    padding-bottom: 400px;
  }
  @media (max-width: 440px) {
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
  }
`;

export default function NotFound() {
  return (
    <Div404>
      <h1>Sorry, we couldn&apos;t find nothing here :/</h1>
      <Attention />
      <h2>
        <Link href="/" style={{ textDecoration: "none", color: "white" }}>
          Go back
        </Link>
      </h2>
    </Div404>
  );
}
