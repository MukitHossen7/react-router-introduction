import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/show/${id}`);
  };
  return (
    <div className="border-2 border-yellow-400 p-7 rounded-xl m-3 flex flex-col items-center space-y-2">
      <h2 className="font-semibold text-2xl">{name}</h2>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <button
        onClick={handleShowDetails}
        className="border-2 border-slate-400 rounded-xl px-3 py-2 mt-3"
      >
        Show Details
      </button>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
