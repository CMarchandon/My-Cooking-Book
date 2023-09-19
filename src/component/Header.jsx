export default function Header() {

    return(
        <header>
            <nav>
                <ul>
                    <div class= "left-items">
                        <li><a href="/Home"><img src="public/logo.svg" alt="My Cooking Book Logo"/></a></li>
                        <li><a href="/Discover">Discover</a></li>
                        <li><a href="/About">About</a></li>
                        <li><button id="new-recipe-btn"><a href="/CreateRecipe" >Add a new recipe</a></button></li>
                    </div>
                    <div class="right-items">    
                    {/*This is the form for the search bar*/ }
                    <form role="search" method="get" class="searchform" action="#">
                            <input id="recipe-search" name="recipe-search" type="text"  placeholder="Look for a recipe"/>
                            <input type="hidden" name="#" value="recipe" />
                    </form> 
                        <li><a href="/MyProfil"><img src="src/assets/icons/user logo navabr.svg"/></a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
    
    }