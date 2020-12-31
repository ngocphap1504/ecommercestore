import React, { useState } from 'react';
import dota from '../img/dota.jpg'; 
import csgo from '../img/CSGO.jpg';
import kingcrab from '../img/kingcrab.jpg';
import jumpforce from '../img/jump-force.jpg';
import asus from '../img/ASUS.jpg';
import dell from '../img/dell.jpg';
import ps4 from '../img/PS4.jpg';
import ps5 from '../img/PS5.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const Home = (props) => {
     console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={dota} alt="Dota" />
                <h3>Dota</h3>
                <h3>$15</h3>
                <a onClick={() => props.addBasket('dota')} className="addToCart cart1" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={csgo} alt="Counter-Strike: Global Offensive" />
                <h3>Counter-Strike: Global Offensive</h3>
                <h3>$10</h3>
                <a onClick={() => props.addBasket('csgo')} className="addToCart cart2" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={kingcrab} alt="King Crab" />
                <h3>King Crab</h3>
                <h3>$5</h3>
                <a onClick={() => props.addBasket('kingcrab')} className="addToCart cart3" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={jumpforce} alt="Jump-Force" />
                <h3>Jump-Force</h3>
                <h3>$3</h3>
                <a onClick={() => props.addBasket('jumpforce')} className="addToCart cart4" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={asus} alt="ASUS" />
                <h3>ASUS</h3>
                <h3>$1200</h3>
                <a onClick={() => props.addBasket('asus')} className="addToCart cart5" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={dell} alt="DELL" />
                <h3>DELL</h3>
                <h3>$1100</h3>
                <a onClick={() => props.addBasket('dell')} className="addToCart cart6" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={ps4} alt="PS4" />
                <h3>PS4</h3>
                <h3>$1000</h3>
                <a onClick={() => props.addBasket('ps4')} className="addToCart cart7" >Add To Cart</a>
            </div>
            <div className="image">
                <img src={ps5} alt="PS5" />
                <h3>PS5</h3>
                <h3>$4000</h3>
                <a onClick={() => props.addBasket('ps5')} className="addToCart cart8" >Add To Cart</a>
            </div>
               
        </div>
    )
}

export default connect(null, { addBasket })(Home);