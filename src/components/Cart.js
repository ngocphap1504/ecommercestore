import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';


import dota from '../img/dota.jpg'; 
import csgo from '../img/CSGO.jpg';
import kingcrab from '../img/kingcrab.jpg';
import jumpforce from '../img/jump-force.jpg';
import asus from '../img/ASUS.jpg';
import dell from '../img/dell.jpg';
import ps4 from '../img/PS4.jpg';
import ps5 from '../img/PS5.jpg';

function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

    //const productImages = [dota, csgo, kingcrab, jumpforce, asus, dell, ps4, ps5];
       const productImages = (product) => {
           if(product.tagName === 'dota') {
               return dota;
           } else if(product.tagName === 'csgo') {
               return csgo;
           } else if(product.tagName === 'kingcrab') {
            return kingcrab;
        } else if(product.tagName === 'jumpforce') {
            return jumpforce;
        } else if(product.tagName === 'asus') {
            return asus;
        } else if(product.tagName === 'dell') {
            return dell;
        } else if(product.tagName === 'ps4') {
            return ps4;
        } else if(product.tagName === 'ps5') {
            return ps5;
        }
       }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is"); 
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle-outline"></ion-icon><img src={productImages(product)} />
                   <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price}</div>
                <div className="quantity">
                       <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                                <span>{product.numbers}</span>
                        <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
                </div>
                <div className="total">${product.numbers * product.price}</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                    { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState 
});

export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);
