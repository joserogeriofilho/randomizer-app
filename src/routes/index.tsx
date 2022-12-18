import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CharacterGenerator, Main, StoryGenerator } from "pages";

const baseUrl = process.env.REACT_APP_FOR_PATH

console.log('######## baseUrl', baseUrl);

export const routes = [
  {
    name: "Main",
    path: baseUrl + "/",
    element: <Main />,
  },
  {
    name: "Character Generator",
    path: baseUrl + "/char",
    element: <CharacterGenerator />,
  },
  {
    name: "Story Generator",
    path: baseUrl + "/story",
    element: <StoryGenerator />,
  },
]

export const Router = () => {
  return (
    <RouterProvider
      router={ createBrowserRouter(routes, { basename: baseUrl }) }
    />
  )
}