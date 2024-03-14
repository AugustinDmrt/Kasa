import React, { useState } from "react";
import "./Collapse.sass";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="collapsible" onClick={toggleCollapse}>
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default Collapse;
