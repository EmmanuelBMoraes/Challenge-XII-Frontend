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
