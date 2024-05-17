import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, SingleCountry } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/:countryId",
    element: <SingleCountry />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
