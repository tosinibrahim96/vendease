import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddProduct from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";
import ViewProducts from "./pages/Product/ViewProducts";
import NotFound from "./pages/NotFound";

import "./App.scss";

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="app-sidebar">
          <Sidebar />
        </Col>
        <Col sm={10} className="app-content">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/products/add" component={AddProduct} />
            <Route path="/products/edit" component={EditProduct} />
            <Route path="/products/all" component={ViewProducts} />
            <Route component={NotFound} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
