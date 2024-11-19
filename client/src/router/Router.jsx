import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Login, MessageContainer, Signup } from "../components";
import Home from "../pages/home/Home";
import { useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import MobailMessage from "../components/message/MobailMessage";

// ProtectRoute component that checks authentication status
const ProtectRoute = ({ children }) => {
  const { authUser } = useAuthContext();

  console.log(authUser)
  
  // If user is authenticated, render the children (protected content)
  if (authUser !== null) {
    return children;
  } else {
    // If not authenticated, redirect to Login page
    return <Login />;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: (
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        ),
      },
      {
        path: "/conversation/:id",
        element: (
          <ProtectRoute>
            <MobailMessage />
          </ProtectRoute>
        ),
      },

    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
