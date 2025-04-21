import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";

const API_URL = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("All Destinations");

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTours(data);
      setError("");
    } catch (err) {
      setError("Failed to fetch tours.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemove = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const destinations = ["All Destinations", ...new Set(tours.map(t => t.name[0].toUpperCase() + t.name.slice(1)))];
  const filteredTours = selected === "All Destinations"
    ? tours
    : tours.filter(t => t.name === selected);

  return (
    <div>
      <h1>Tour Selector</h1>
      <DestinationSelector destinations={destinations} selected={selected} setSelected={setSelected} />
      <Gallery tours={filteredTours} loading={loading} error={error} onRemove={handleRemove} onRefresh={fetchTours} />
    </div>
  );
}

export default App;
