"use client";
import styled from "styled-components";
import { LogoIcon } from "./logo-icon";
import { theme } from "@/app/theme";
import SocialIcons from "./social-links";
import Link from "next/link";
import { notFound } from "next/navigation";

const WrapperFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  padding: 40px 80px;
  gap: 80px;
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
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

const LinkFooter = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.white};
`;

export default function Footer() {
  return (
    <WrapperFooter>
      <DivSocialMedia>
        <LogoIcon />
        <Address>MyRide Inc., 2nd Floor, New York, NY 10016</Address>
        <DivSocialIcons>
          {SocialIcons()[0]} {SocialIcons()[1]} {SocialIcons()[2]}
        </DivSocialIcons>
      </DivSocialMedia>
      <DivLinksWrapper>
        <DivLinks>
          <List>
            <ListTitle>Company</ListTitle>
            <ListItem>
              <LinkFooter href="not-found"> About Us</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found"> News</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found"> Careerss</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">How we work</LinkFooter>
            </ListItem>
          </List>
        </DivLinks>
        <DivLinks>
          <List>
            <ListTitle>Support</ListTitle>
            <ListItem>FAQ</ListItem>
            <ListItem>US Office</ListItem>
            <ListItem>Asia Office</ListItem>
            <ListItem>Help Center</ListItem>
          </List>
        </DivLinks>
        <DivLinks>
          <List>
            <ListTitle>More</ListTitle>
            <ListItem>Become a partner</ListItem>
            <ListItem>Partner Support</ListItem>
            <ListItem>Mobile app links</ListItem>
          </List>
        </DivLinks>
      </DivLinksWrapper>
    </WrapperFooter>
  );
}
