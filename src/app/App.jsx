import "./App.css";
import { MovieListPage } from "../pages/MoviesListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <SearchFormWrapper/>
      },
      {
        path: "/:movieId",
        loader: movieLoader,
        element: <MovieDetails />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

