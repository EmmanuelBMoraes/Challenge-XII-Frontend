"use client";
import styled from "styled-components";
import { theme } from "@/app/theme";

interface HeaderMenuProps {}

const List = styled.ul`
  display: flex;
  color: ${theme.colors.white};
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.white};
`;
export default function HeaderMenu(props: HeaderMenuProps) {
  return (
    <List>
      <ListItem>
        <Link href="">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="">Getting a Taxi</Link>
      </ListItem>
      <ListItem>
        <Link href="">Mobile App</Link>
      </ListItem>
      <ListItem>
        <Link href="">Contact Us</Link>
      </ListItem>
    </List>
  );
}
