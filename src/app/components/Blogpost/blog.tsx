type BlogPost = {
  id: number;
  title: string;
  body: string;
};

type BlogPageProps = {
  post: BlogPost;
};

export default function BlogPage({ post }: BlogPageProps) {
  if (!post) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
