import PropTypes from "prop-types";
const User = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="border-2 border-yellow-400 p-7 rounded-xl m-3 flex flex-col items-center space-y-2">
      <h2 className="font-semibold text-2xl">{name}</h2>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
