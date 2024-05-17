"use client";

import { LogoIcon } from "./logo-icon";
import {
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
} from "./styles";
import SocialIcons from "./social-links";
import { useEffect } from "react";

export default function Footer() {
  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <WrapperFooter>
      <DivSocialMedia>
        <LogoIcon />
        <Address>MyRide Inc., 2nd Floor, New York, NY 10016</Address>
        <DivSocialIcons>
          <div
            onClick={() => handleClick("https://www.facebook.com/compass.uol/")}
          >
            {SocialIcons()[0]}
          </div>
          <div
            onClick={() =>
              handleClick("https://www.instagram.com/compass.uol/")
            }
          >
            {SocialIcons()[1]}
          </div>
          <div onClick={() => handleClick("https://twitter.com/compassuol")}>
            {SocialIcons()[2]}
          </div>
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
              <LinkFooter href="not-found"> Careers</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">How we work</LinkFooter>
            </ListItem>
          </List>
        </DivLinks>
        <DivLinks>
          <List>
            <ListTitle>Support</ListTitle>
            <ListItem>
              <LinkFooter href="not-found">FAQ</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">US Office</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">Asia Office</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">Help Center</LinkFooter>
            </ListItem>
          </List>
        </DivLinks>
        <DivLinks>
          <List>
            <ListTitle>More</ListTitle>
            <ListItem>
              <LinkFooter href="not-found">Become a partner</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">Partner Support</LinkFooter>
            </ListItem>
            <ListItem>
              <LinkFooter href="not-found">Mobile app links</LinkFooter>
            </ListItem>
          </List>
        </DivLinks>
      </DivLinksWrapper>
    </WrapperFooter>
  );
}
