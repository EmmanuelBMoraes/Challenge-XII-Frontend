import styled from "styled-components";
import { theme } from "@/app/theme";
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

export { Link, ListItem, List, TagHeader, UserArea, Separator };
