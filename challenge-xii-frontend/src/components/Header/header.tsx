"use client";
import React from "react";
import styled from "styled-components";
import { LogoIcon } from "./logo-icon";
import HeaderMenu from "./header-menu";
import { BellIcon } from "./bell-icon";
import Image from "next/image";
const userIco =
  "https://" + process.env.NEXT_PUBLIC_BUCKET_URL + "/cards/user-avatar.png";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Separator = styled.div`
  border: 0.7px solid #333333;
  height: 30px;
`;

export default function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <div>
        <LogoIcon />
      </div>
      <div>
        <HeaderMenu />
      </div>
      <UserArea>
        <BellIcon />
        <Separator />
        <Image src={userIco} alt="User Icon" width={36} height={36} />
      </UserArea>
    </TagHeader>
  );
}
