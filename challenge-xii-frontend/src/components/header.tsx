"use client";
import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export default function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <div></div>
      <div></div>
      <div></div>
    </TagHeader>
  );
}
