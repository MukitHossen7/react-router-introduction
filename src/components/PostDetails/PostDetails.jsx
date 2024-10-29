import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log(postId);
  const handlePostSite = () => {
    navigate(-1);
  };
  return (
    <div className="text-center pt-5">
      <h2 className="text-2xl font-bold">Post Id {post.id}:</h2>
      <p className="text-lg font-medium">{post.body}</p>
      <button
        onClick={handlePostSite}
        className="border-2 border-slate-400 rounded-xl px-3 py-2 mt-3"
      >
        Back To Posts
      </button>
    </div>
  );
};

export default PostDetails;
