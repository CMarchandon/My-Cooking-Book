import '/src/SCSS/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import CreateRecipe from "./pages/CreateRecipe";
import Discover from "./pages/Discover";
import EditRecipe from "./pages/EditRecipe";
import Home from "./pages/Home";
import MyProfil from "./pages/MyProfil";
import Page404 from "./pages/Page404";
import SingleDiscover from "./pages/SingleDiscover";
import SingleRecipe from "./pages/SingleRecipe";

function App() {


  return (

    
    //The infamous router, every page is by alpabetical order, if u add want please follow the logic 
   <>
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/About" element={<About/>}/>
            <Route path="/CreateRecipe" element={<CreateRecipe/>}/>
            <Route path="/Discover" element={<Discover/>}/>
            <Route path="/EditRecipe" element={<EditRecipe/>}/>
            <Route index element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/MyProfil" element={<MyProfil/>}/>
            <Route path="/Page404" element={<Page404/>}/>
            <Route path="/SingleDiscover" element={<SingleDiscover/>}/>
            <Route path="/SingleRecipe" element={<SingleRecipe/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  </>
  )
}

export default App
