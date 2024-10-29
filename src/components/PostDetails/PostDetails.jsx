import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div className="text-center pt-5">
      <h2 className="text-2xl font-bold">Post Id {post.id}:</h2>
      <p className="text-lg font-medium">{post.body}</p>
    </div>
  );
};

export default PostDetails;
