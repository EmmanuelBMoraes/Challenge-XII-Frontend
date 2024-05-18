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
        if (process.env.NEXT_PUBLIC_API_URL_POSTS) {
          const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_POSTS);
          setPosts(res.data);
        } else {
          console.log("Error on api url");
        }
      } catch (error) {}
    };
    fetchPosts();
  }, []);

  return posts.map((post: Post) => {
    return <Postss {...post} key={post.id} />;
  });
}
