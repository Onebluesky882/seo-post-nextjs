"use client";
import { useEffect, useState } from "react";

export type BlogPost = {
  id: number;
  title: string;
  body: string;
  reactions: Reactions;
  views: number;
  userId: number;
};

export type Reactions = {
  likes: number;
  dislikes: number;
};

export type PostBlogs = {
  param: { postId: string };
};

const usePost = (id: string) => {
  const [post, setPost] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await response.json();
      setPost((prev) => [...prev, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { post, setPost, getPost, loading, setLoading };
};
export default usePost;
