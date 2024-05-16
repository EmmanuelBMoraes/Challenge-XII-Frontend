import Image from "next/image";
import { Card, Title, Description, LearM, DescDiv } from "./styles";

interface Post {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

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
