import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Notifications from "../pages/notifications";
import Explore from "../pages/explore";
import MainLayout from "../layouys/main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            
            {
                path: 'explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            }
            
        ]
    }
    
])

export default routes