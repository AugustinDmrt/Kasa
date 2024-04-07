import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";
import "./Collapse.sass";

const Collapse = (props: { title: string; data: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <h2 className="collapse-title">{props.title}</h2>
        <div className="collapse-arrow" onClick={toggleCollapse}>
          {isOpen ? (
            <CaretUp size={32} weight="bold" color="white" />
          ) : (
            <CaretDown size={32} weight="bold" color="white" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="collapse-div">
          <ul className="collapse-ul">
            {props.data.map((item, index) => (
              <li className="collapse-li" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collapse;
