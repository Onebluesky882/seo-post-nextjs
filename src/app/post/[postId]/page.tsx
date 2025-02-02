type PostBlogs = {
  params: {
    postId: string;
  };
};

export default async function getPost({ params }: PostBlogs) {
  const response = await fetch(`https://dummyjson.com/post/${params.postId}`);
  if (!response.ok) {
    return <div>not found</div>;
  }

  const { id, title, body } = await response.json();

  return (
    <div>
      <h1>
        post {id} : {title}
      </h1>
    </div>
  );
}
