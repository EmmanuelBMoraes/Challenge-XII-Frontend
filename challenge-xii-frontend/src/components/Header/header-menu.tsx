"use client";
import { Link, ListItem, List } from "./styles";
interface HeaderMenuProps {}

export default function HeaderMenu(props: HeaderMenuProps) {
  return (
    <List>
      <ListItem>
        <Link href="">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="#Section01">Getting a Taxi</Link>
      </ListItem>
      <ListItem>
        <Link href="#Section02">Mobile App</Link>
      </ListItem>
      <ListItem>
        <Link href="#Section03">Contact Us</Link>
      </ListItem>
    </List>
  );
}
