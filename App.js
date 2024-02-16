import React from "react";
import img1 from "./cart.webp";
import img2 from "./food.jpg";
import {Link, Route, Routes } from "react-router-dom";
import Menu from "./Menu";

function App(){
    
    return(
        <>    
        <header>
           
        <div class="navbar">
        <a class="logo">Restaurant landing Page</a>
        <a class="anc">Landing</a> 
        <a>Home</a>
        <Link to = "/Gallery">Gallery</Link>
        <Routes>
        <Route path="/Gallery" element = {<Menu></Menu>}></Route>
        </Routes>
        <a>Shop</a>
        <a>Blog</a>
        <a>About</a>
        <a>Team</a>
        <a>Contact</a>
        <img src={img1} alt=""/>
    </div>
    </header>
    <div className="box2">
        <div className="heading">
        <h2>Only Quality Food</h2>
       <p> Contrary to popular belief, Lorem Ipsum is not simply random text.
         It has roots in a piece of classical Latin l</p>
         <div className="btn">
         <button>View Menu</button>
         <button className="btn2">Reservation</button>
         </div>
        </div>
 </div>
 <div className="section">
    <div className="section1">
    <h6><u>Our Story</u></h6>
    <h2>Welcome to Royal</h2>
    <p>cto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem 
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, 
        </p>
         </div>
         <div className="section2">
    <img className="image" src={img2} alt="" />
 </div>
 </div>

 <footer>
    <div className="foot">
        <p>Only the Best</p>
        <p className="para">Fresh Ingredient, Tasty Meal</p>

    </div>

 </footer>

 
    </>
        
        
    );
}
export default App;