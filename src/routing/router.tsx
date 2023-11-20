import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Contents from "../pages/Contents";
import Glossary from "../pages/Glossary";
import Tests from "../pages/Tests";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/contents",
    element: <Contents/>
  },
  {
    path: "/glossary",
    element: <Glossary/>
  },
  {
    path: "/tests",
    element: <Tests/>
  }
]);