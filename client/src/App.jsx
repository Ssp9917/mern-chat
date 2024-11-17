import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
     
        <RouterProvider router={router}>
         
        </RouterProvider>
      
    </>
  );
}

export default App;
