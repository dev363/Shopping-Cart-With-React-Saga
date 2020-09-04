import React,{Fragment} from "react"
import { BrowserRouter, Route, Redirect, Switch,Link } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'

export default ()=>{

    return(
        <Fragment>
        <Container>
        <Row md={4}>
        <Col md={6}>
            <Link to="/" >Home</Link>
        </Col>
        <Col md={6}>
        <Link to="/backend" >Home</Link>
        </Col>
        </Row>
        <Routes/>
        </Container>
        </Fragment>
    )
}


const Routes=()=>{

    return(
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/backend" component={Admin} />
            </Switch>
        </Fragment>
    )
}

const Home=()=>{
    return (
        <p>Home</p>
    )
}

const Admin=()=>{
    return (
        <p>Admin</p>
    )
}