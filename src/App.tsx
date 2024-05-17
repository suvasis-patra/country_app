import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, SingleCountry } from "./pages";
import { Navbar } from "./components";

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
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
