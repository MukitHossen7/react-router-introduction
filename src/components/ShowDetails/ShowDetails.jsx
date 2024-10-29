import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const details = useLoaderData();

  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-2xl font-bold"> Name : {details.name}</h1>
      <p className="text-xl font-medium">Website : {details.website}</p>
    </div>
  );
};

export default ShowDetails;
