import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Postes = () => {
  const posts = useLoaderData();
  return (
    <div className="pt-6">
      <h2 className="font-bold text-2xl text-center">
        Total Post: {posts.length}
      </h2>
      <div className="grid grid-cols-3 pt-6">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Postes;
