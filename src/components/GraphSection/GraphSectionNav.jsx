import React, { useState } from "react";
import GraphSectionNavItem from "./GraphSectionNavItem";
import "./GraphSectionNav.scss";

const GraphSectionNav = () => {
  const [navSections, setActiveNav] = useState([1, 0, 0]);

  /**
   * when any tab is clicked, use the parameter(value)
   * to determine the position of the clicked tab
   * react hooks won't update if we mutate the the existing array, hence 
   * all manipulations are on the copy created
   */
  const handleSectionClick = value => {
    const navSectionsCopy = [...navSections];
    navSectionsCopy.fill(0).splice(value, 1, 1)
    setActiveNav(navSectionsCopy);
  };

  
  /**
   * during the render process,
   * receive index as parameter to keep track of the tab since the tabs 
   * correspond with the array declared in the state
   * check state to determine if value =1(active) or 0(inactive)
   */
  const addActiveClass = index => {
    return navSections[index] === 1 ? "active" : "";
  };

  return (
    <div className="graphsection-container">
      <div
        className={`graphnav-item ${addActiveClass(0)}`}
        onClick={() => handleSectionClick(0)}
      >
        <GraphSectionNavItem header="gross sales" body="n1,012,000" />
      </div>
      <div
        className={`graphnav-item ${addActiveClass(1)}`}
        onClick={() => handleSectionClick(1)}
      >
        <GraphSectionNavItem header="total orders" body="n5,120" />
      </div>
      <div
        className={`graphnav-item ${addActiveClass(2)}`}
        onClick={() => handleSectionClick(2)}
      >
        <GraphSectionNavItem header="product quantity" body="n3,405" />
      </div>
    </div>
  );
};

export default GraphSectionNav;
