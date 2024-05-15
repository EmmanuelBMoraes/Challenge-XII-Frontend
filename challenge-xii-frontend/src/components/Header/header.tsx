"use client";
import React from "react";
import { LogoIcon } from "./logo-icon";
import HeaderMenu from "./header-menu";
import { BellIcon } from "./bell-icon";
import Image from "next/image";
import { TagHeader, UserArea, Separator } from "./styles";

const userIco =
  "https://" + process.env.NEXT_PUBLIC_BUCKET_URL + "/cards/user-avatar.png";

interface HeaderProps {}

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
