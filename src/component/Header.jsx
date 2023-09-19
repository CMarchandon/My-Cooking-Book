export default function Header() {

    return(
        <header>
            <nav>
                <ul>
                    <li><a href="/Home"><img src="public/logo.svg" alt="My Cooking Book Logo"/></a></li>
                    <li><a href="/Discover">Discover</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/CreateRecipe" id="new-recipe-btn">Add a new recipe</a></li>
                </ul> 
                <ul>
                    <li>navbar</li>
                    <li><a href="/MyProfil">My profil</a></li>
                </ul>
            </nav>
        </header>
    )
    
    }