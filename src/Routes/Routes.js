import { createBrowserRouter } from "react-router-dom";
import AllShows from "../Components/AllShows/AllShows";
import ShowDetails from "../Components/ShowDetails/ShowDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <AllShows></AllShows>,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
    },
    {
        path: '/show/:id',
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
    },


]);