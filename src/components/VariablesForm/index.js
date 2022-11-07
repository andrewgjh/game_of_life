const VariablesForm = ({
  width,
  height,
  setHeight,
  setWidth,
  generations,
  setGenerations,
  inhabitants,
  setInhabitants,
}) => {
  return (
    <form>
      <label>
        Grid Width:{" "}
        <input
          type="number"
          min="5"
          max="200"
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
          max="300"
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
      <label>
        Inhabitants:{" "}
        <select
          onChange={e => setInhabitants(e.target.value)}
          value={inhabitants}
        >
          <option value="">--Please choose an option--</option>
          <option value="🐶">🐶</option>
          <option value="🐱">🐱</option>
          <option value="💃">💃</option>
          <option value="🕺">🕺</option>
          <option value="👽">👽</option>
        </select>
      </label>
    </form>
  );
};

export default VariablesForm;
