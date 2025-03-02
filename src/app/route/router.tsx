import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layout/Layout.tsx";
import {route} from "../../shared/configs/constats/contants.ts";
import {HomePage} from "../../pages/home/view/HomePage.tsx";

export const router  = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: route.home,
                element: <HomePage/>
            },
        ]

    }
])