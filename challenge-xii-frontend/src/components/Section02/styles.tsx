import styled from "styled-components";
import { theme } from "@/app/theme";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 331px;
  height: 418px;
  padding: 12px;
`;

const Title = styled.p`
  font-weight: 500;
  color: ${theme.colors.white};
  font-size: 16px;
`;

const Description = styled.p`
  color: ${theme.colors.text_grey};
  font-size: 16px;
  margin-top: 6px;
`;

const LearM = styled.div`
  text-align: end;
  padding-top: 11px;
  color: ${theme.colors.golden};
`;

const DescDiv = styled.div`
  padding: 15px 14px;
  background-color: ${theme.colors.post_background};
  border-radius: 0px 0px 4px 4px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 74px 89px;
  gap: 60px;
`;

const Paragraph = styled.p`
  font-size: 26px;
  color: ${theme.colors.golden};
  padding-bottom: 8px;
`;

const Division = styled.div`
  text-align: center;
`;

const H2 = styled.h2`
  color: ${theme.colors.white};
  font-size: 42px;
`;

const SectionPosts = styled.div`
  display: flex;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;
export {
  Card,
  Title,
  Description,
  LearM,
  DescDiv,
  Section,
  Paragraph,
  Division,
  H2,
  SectionPosts,
};
