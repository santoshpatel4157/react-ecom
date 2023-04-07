
import './App.css';
import { Navbar } from "./comp/Navbar";
import { Body } from "./comp/Body";
import { Footer } from "./comp/Footer"
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import { About } from './comp/About';
import { Error } from './comp/Error';


const ApplayOut = () =>{
  

  return (
    <>
    
    <Navbar />
    <Body />
    <Footer />
    </>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<ApplayOut/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About />
  }
])




function App() {
 
  return (
  //  <ApplayOut />
  <RouterProvider router={appRouter} />
  );
}

export default App;
