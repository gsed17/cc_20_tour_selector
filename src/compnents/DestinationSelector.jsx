function DestinationSelector({ destinations, selected, setSelected }) {
    return (
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {destinations.map((dest, idx) => (
          <option key={idx} value={dest}>{dest}</option>
        ))}
      </select>
    );
  }
  
  export default DestinationSelector;
  