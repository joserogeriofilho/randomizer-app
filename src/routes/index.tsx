import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CharacterGenerator, Main, StoryGenerator } from "pages";

export const routes = [
  {
    name: "Main",
    path: "/",
    element: <Main />,
  },
  {
    name: "Character Generator",
    path: "/char",
    element: <CharacterGenerator />,
  },
  {
    name: "Story Generator",
    path: "/story",
    element: <StoryGenerator />,
  },
]

export const Router = () => {
  return (
    <RouterProvider
      router={ createBrowserRouter(routes, { basename: '/randomizer-app' }) }
    />
  )
}