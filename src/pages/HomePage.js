import { GiCookingPot, GiCutLemon, GiChickenOven, GiForkKnifeSpoon, GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../styles/HomePage.scss";

const HomePage = () => {

  return(
        <section className="home-page">
            <div className="center-buttons">
                <Link to="/ingredients" id="ingredients"><GiCutLemon /><br /><p>Ingredients</p></Link>
                <Link to="/recipes" id="recipes"><GiChickenOven /><br /><p>Recipes</p></Link>
                <Link to="/tableware" id="tableware"><GiForkKnifeSpoon /><br /><p>Tableware</p></Link>
                <Link to="/shopping-list" id="shopping-alerts"><GiShoppingCart /><br /><p>Shopping List</p></Link>
                <div className="center-logo">
                    <GiCookingPot />
                    <h1>KITCHENWARE</h1>
                </div>
            </div>
        </section>
    )
}

export default HomePage;
