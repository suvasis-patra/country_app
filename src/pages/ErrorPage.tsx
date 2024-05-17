import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Country not found!!!</h1>
        <p className="text-xl font-semibold mt-2">something went wrong</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-black text-white p-4 rounded-lg"
      >
        Back to home
      </button>
    </div>
  );
};

export default ErrorPage;
