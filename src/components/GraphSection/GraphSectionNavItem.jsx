import React from "react";

const GraphSectionNavItem = ({ header, body }) => {
  return (
    <div>
      <p>{header}</p>
      <p className="sales-amount">{body}</p>
    </div>
  );
};

export default GraphSectionNavItem;
