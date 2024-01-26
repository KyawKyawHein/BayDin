import { createBrowserRouter } from "react-router-dom";
import {Home,LuckyTable,Result} from "./page";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'Baydin',
                element: <Home />
            },
            {
                path: 'Baydin/lucky-table',
                element: <LuckyTable />
            },
            {
                path: 'Baydin/result',
                element: <Result />
            }
        ]
    }
])