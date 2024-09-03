import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, SingleCountry } from "./pages";
import { Navbar } from "./components";
import QueryProvider from "./react-query/QueryProvider";
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
      <QueryProvider>
        <Navbar />
        <RouterProvider router={router} />
      </QueryProvider>
    </>
  );
}

export default App;
