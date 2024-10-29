import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const handleBackUsers = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-2xl font-bold"> Name : {details.name}</h1>
      <p className="text-xl font-medium">Website : {details.website}</p>
      <button
        onClick={handleBackUsers}
        className="border-2 border-slate-400 rounded-xl px-3 py-2 mt-3"
      >
        Back Users
      </button>
    </div>
  );
};

export default ShowDetails;
