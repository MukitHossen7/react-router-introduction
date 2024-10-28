import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2 className="font-bold text-3xl text-center pt-4">
        Users : {users.length}
      </h2>
      <div className="grid grid-cols-3 pt-6">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
