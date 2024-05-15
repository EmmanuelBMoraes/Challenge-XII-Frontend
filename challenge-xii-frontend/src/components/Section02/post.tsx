import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/app/theme";

interface Post {
  title: string;
  imageUrl: string;
  description: string;
}

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

const Post = (postRes: Post) => {
  return (
    <Card>
      <Image
        src={postRes.imageUrl}
        alt="Car"
        width={307}
        height={214}
        style={{ borderRadius: "4px 4px 0px 0px" }}
      />

      <DescDiv>
        <Title>{postRes.title}</Title>
        <Description>{postRes.description}</Description>
        <LearM>LEARN MORE</LearM>
      </DescDiv>
    </Card>
  );
};

export default Post;
