import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-7xl font-semibold">Oops!!!</h2>
      {error.status === 404 && (
        <div>
          <h3 className="text-2xl font-medium pt-5">
            Page is not found !! Please go back home
          </h3>
          <button
            onClick={handleBackHome}
            className="border-2 border-slate-400 rounded-xl px-3 py-2 mt-3"
          >
            Back To Home Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
