import React from "react";
import { withRouter } from "react-router-dom";
import SidebarElement from "./SidebarElement";
import "./Sidebar.scss";

const Sidebar = props => {
  const { location } = props;

  const applyParentStyles = path => {
    return location.pathname.startsWith(path) && "active"
      ? "parent-selected"
      : "";
  };

  return (
    <div>
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <nav className="navigation">
        <ul className="mainmenu">
          <li>
            <SidebarElement url="/dashboard" text="dashboard" />
          </li>
          <li className={applyParentStyles("/products")}>
            <SidebarElement text="products" hasSubmenu />
            <ul className="submenu">
              <li>
                <SidebarElement url="/products/add" text="add product" />
              </li>
              <li>
                <SidebarElement url="/products/edit" text="edit product" />
              </li>
              <li>
                <SidebarElement url="/products/all" text="all products" />
              </li>
            </ul>
          </li>
          <li className={applyParentStyles("/purchase-order")}>
            <SidebarElement text="purchase order" hasSubmenu />
            <ul className="submenu">
              <li>
                <SidebarElement url="/purchase-order/create" text="create" />
              </li>
              <li>
                <SidebarElement url="/purchase-order/all" text=" view all" />
              </li>
            </ul>
          </li>
          <li>
            <SidebarElement url="/delivery" text="delivery" />
          </li>
          <li>
            <SidebarElement url="/payment" text="payment" />
          </li>
          <li>
            <SidebarElement url="/receipt" text="receipt" />
          </li>
          <li>
            <SidebarElement url="/history" text="history" />
          </li>
          <li>
            <SidebarElement url="/claim" text="claim" />
          </li>
          <li>
            <SidebarElement url="/inbox" text="inbox" />
          </li>
          <li>
            <SidebarElement url="/rating" text="rating" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Sidebar);
