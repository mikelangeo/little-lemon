import React from "react";
import food1 from "../images/food1.jpg";
import { Link } from "react-router-dom";

function Header() {
    return(
    <header>
        <section>
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                <button>Reserve Table</button>
            </div>
            <div>
                <img src={food1} />
            </div>
        </section>
    </header>
    )
}

export default Header;