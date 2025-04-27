import { useState } from "react";
import enableSwitchicon from "../../assets/enableSwitchicon.svg";
import disabledIcon from "../../assets/disabledIcon.svg";

export default function SwitchBtn({ index }) {
  const [toggleStates, setToggleStates] = useState({});

  const handleToggle = (idx) => {
    setToggleStates((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <img
      src={toggleStates[index] ? enableSwitchicon : disabledIcon}
      alt="Toggle"
      className="h-9 w-9 cursor-pointer"
      onClick={() => handleToggle(index)}
    />
  );
}
