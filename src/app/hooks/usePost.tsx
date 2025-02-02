import { useState } from "react";

export type BlogPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
};

export type Reactions = {
  likes: number;
  dislikes: number;
};
const usePost = () => {
  const [post, setPost] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getPost = async (id: string) => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await response.json();
    setPost((prev) => [...prev, data]);
  };
  return { post, setPost, getPost, loading, setLoading };
};
export default usePost;
