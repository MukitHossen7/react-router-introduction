import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="border-2 border-slate-600 p-8 m-3 rounded-xl  flex flex-col items-center space-y-2 text-center">
      <h3 className="font-bold text-2xl">Post Id : {id} </h3>
      <h2 className="font-medium text-xl">Title : {title}</h2>
      <Link to={`/postDetails/${id}`} className="flex-grow">
        <button className="border-2 border-slate-400 rounded-xl px-3 py-2">
          Post Details
        </button>
      </Link>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.object,
};
export default Post;
