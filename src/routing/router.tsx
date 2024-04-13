import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Contents from "../pages/Contents";
import Glossary from "../pages/Glossary";
import Tests from "../pages/Tests";
import Videos from "../pages/Videos";
import {GlossaryPage} from "../pages/Glossary/GlossaryPage/glossaryPage";


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
    path: "/glossary/:pageId",
    element: <GlossaryPage/>
  },
  {
    path: "/tests",
    element: <Tests/>
  },
  {
    path: "/videos",
    element: <Videos/>
  }
]);