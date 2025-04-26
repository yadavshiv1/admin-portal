import { useState } from "react";

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
      src={toggleStates[index] ? "/img/enableSwitchicon.svg" : "/img/disabledIcon.svg"}
      alt="Toggle"
      className="h-9 w-9 cursor-pointer"
      onClick={() => handleToggle(index)}
    />
  );
}
