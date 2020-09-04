import React from "react"
import { Container, Row, Col, Card,Button } from "react-bootstrap";

export default (props)=>{
    const{data,addCart}= props;
    return(
        <Card className="product-card">
        
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                $ {data.price}
                </Card.Text>
                <Button size="sm" variant="primary" onClick={(e)=>addCart(e,data)}>Add to Cart</Button>
            </Card.Body>
            </Card>
    )
}