import React, { Component } from "react";
import { Button, Card, Col, Container, Row, Jumbotron, Form, } from 'react-bootstrap';
import Nav from "../Nav";
import products from "./products.json"
import ProductCard from "./ProductCard"
import './style.scss'
class SustainableProducts extends Component{
    state ={
        products
    };

    render (){
        return(
        <div>
            <Nav/>
            <Jumbotron className="susjumbo text-center" fluid>
                <Container>
                    <h1 className="susfont">Find sustainable products for your home!</h1>
                </Container>
            </Jumbotron>
            {/* <Container> */}
            <Row className="m1-1">
            {this.state.products.map(product => (
                <ProductCard
    
                id={product.id}
                key={product.id}
                name={product.name}
                imageLink={product.imageLink}
                sellersLink={product.sellersLink}
              />
    
            ))}
            </Row>

                
            {/* </Container> */}

        </div>
        )
    }
}

export default SustainableProducts


