import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DocumentForm from "./pages/create";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/create",
      element: <DocumentForm />,
    },
  ]);