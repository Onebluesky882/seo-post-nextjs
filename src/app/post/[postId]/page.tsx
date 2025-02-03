// ✅ Move this file to: src/app/post/[postId]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Define the TypeScript type for a blog post
type BlogPost = {
  id: number;
  title: string;
  body: string;
};

export async function getGenerateMetadata({
  params,
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const response: any = await fetch(
    `https://dummyjson.com/posts/${params?.postId}`
  );

  const { title, body } = response.json();

  return {
    title: title,
    description: body,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { postId: string };
}) {
  const response = await fetch(`https://dummyjson.com/posts/${params?.postId}`);

  if (!response.ok) {
    notFound(); // Show 404 page if the post is not found
  }

  const post: BlogPost = await response.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
