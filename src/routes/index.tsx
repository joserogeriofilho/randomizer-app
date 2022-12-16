import { RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";

import CharacterGenerator from "../pages/CharacterGenerator";
import Main from "../pages/Main";
import StoryGenerator from "../pages/StoryGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/char",
    element: <CharacterGenerator />,
  },
  {
    path: "/story",
    element: <StoryGenerator />,
  },
], {
  basename: '/randomizer-app'
});

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}