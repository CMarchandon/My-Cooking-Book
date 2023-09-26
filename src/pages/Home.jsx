import NavBarWshearch from "../component/NavBarWshearch";
import SearchBar from "../component/SearchBar";
import Footer from "../component/Footer";
import Page404 from "./Page404";
import Caroussel from "../component/Caroussel";


export default function Home() {
    return (
        <>
            <NavBarWshearch/>
            <img src="public/logo + texte(1).svg"/>
            <h2>Weekly selection</h2>
            <hr/>
            <Caroussel/>
            <h2>My recipes </h2>
            <hr/>
            <div className="card-home">
                <div>
                    <img src="public/assets/img/about-us_food.png"></img>
                </div>
                <div>
                    <h3>Titre</h3>
                    <p>15-30</p>
                    <p>Entrée</p>
                    <button><img src="public/assets/icons/right arrow.svg"/></button>
                </div>
            </div>
            <Footer/>
        </>
    
    )
    
    }