import { useState } from "react";

const VariablesForm = ({ runSim, width, height, setHeight, setWidth }) => {
  const [generations, setGenerations] = useState(20);

  return (
    <form onSubmit={runSim}>
      <label>
        Grid Width:{" "}
        <input
          type="number"
          min="5"
          value={width}
          onChange={e => {
            setWidth(e.target.value);
          }}
        ></input>
      </label>
      <label>
        Grid Height:{" "}
        <input
          type="number"
          min="5"
          value={height}
          onChange={e => {
            setHeight(e.target.value);
          }}
        ></input>
      </label>
      <label>
        Number Of Generations:{" "}
        <input
          type="number"
          min="20"
          value={generations}
          onChange={e => {
            setGenerations(e.target.value);
          }}
        ></input>
      </label>

      <button type="submit">Run Sim</button>
    </form>
  );
};

export default VariablesForm;
