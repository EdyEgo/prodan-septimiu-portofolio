import React from "react";
import InputComponent from "./InputComponent";
interface SectionOneProps {}

const SectionOne: React.FC<SectionOneProps> = () => {
  return (
    <div className="sectionOne">
      <div className="create-component-input-container">
        <InputComponent />
      </div>
      <div className="input-container-results"></div>
    </div>
  );
};

export default SectionOne;
