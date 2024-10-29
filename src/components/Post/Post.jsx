import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handlePostDetails = () => {
    navigate(`/postDetails/${id}`);
  };
  return (
    <div className="border-2 border-slate-600 p-8 m-3 rounded-xl  flex flex-col items-center space-y-2 text-center">
      <h3 className="font-bold text-2xl">Post Id : {id} </h3>
      <h2 className="font-medium text-xl">Title : {title}</h2>

      <button
        onClick={handlePostDetails}
        className="border-2 border-slate-400 rounded-xl px-3 py-2"
      >
        Post Details
      </button>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object,
};
export default Post;
