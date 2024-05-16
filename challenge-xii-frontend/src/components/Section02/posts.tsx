import axios from "axios";
import { useEffect, useState } from "react";
import Postss from "./post";

interface Post {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/posts");
        setPosts(res.data);
      } catch (error) {}
    };
    fetchPosts();
  }, []);

  return posts.map((post: Post) => {
    return <Postss {...post} key={post.id} />;
  });
}
