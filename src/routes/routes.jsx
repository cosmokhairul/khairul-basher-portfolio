import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/',
                element: <AboutMe />
            },
            {
                path: '/',
                element: <ContactMe />
            },

        ]
    },
]);