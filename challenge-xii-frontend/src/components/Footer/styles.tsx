import styled from "styled-components";
import { theme } from "@/app/theme";
import Link from "next/link";

const WrapperFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 80px;
  gap: 80px;
  flex-wrap: wrap;
  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const DivSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 440px) {
    align-items: center;
  }
`;

const Address = styled.p`
  color: ${theme.colors.text_grey};
  @media (max-width: 440px) {
    text-align: center;
  }
`;

const DivSocialIcons = styled.div`
  display: flex;
  gap: 25px;
  & div {
    cursor: pointer;
  }
`;

const DivLinks = styled.div`
  color: ${theme.colors.white};
  display: inline-block;
  position: relative;
  width: 183px;
  @media (max-width: 440px) {
    margin-bottom: 20px;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 21px;
`;

const ListItem = styled.li`
  padding-bottom: 12px;
`;

const DivLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

const LinkFooter = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.white};
`;

export {
  LinkFooter,
  DivLinksWrapper,
  ListItem,
  ListTitle,
  List,
  DivLinks,
  DivSocialIcons,
  Address,
  DivSocialMedia,
  WrapperFooter,
};
