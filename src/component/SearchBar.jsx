export default function SearchBar() {

    return(
<header>
        <form role="search" method="get" class="searchform" action="#">
                <input id="recipe-search" name="recipe-search" type="text"  placeholder="Look for a recipe"/>
                <input type="hidden" name="#" value="recipe" />
        </form> 
</header>
    )
}