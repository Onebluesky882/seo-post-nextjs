type PostBlogs = {
  params: {
    postId: string;
  };
};
export type Reactions = {
  likes: number;
  dislikes: number;
};

export default async function getPost({ params }: PostBlogs) {
  const response = await fetch(`https://dummyjson.com/post/${params.postId}`);
  if (!response.ok) {
    return <div>not found</div>;
  }

  const {
    id,
    title,
    body,
    reactions,
  }: { id: number; title: string; body: string; reactions: Reactions } =
    await response.json();

  return (
    <div>
      <h1>
        post {id} : {title}
      </h1>

      <p> {reactions.likes}</p>
    </div>
  );
}
