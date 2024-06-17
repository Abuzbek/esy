import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DocumentForm from "./pages/DocumentForm";
import DocumentView from "./pages/DocumentView";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/create",
      element: <DocumentForm />,
    },
    {
      path: "/view/:id",
      element: <DocumentView />,
    },
  ]);