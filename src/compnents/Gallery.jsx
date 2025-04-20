import TourCard from "./TourCard";

function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>{error}</p>;
  if (tours.length === 0) return (
    <div>
      <p>No tours left. Refresh to reload.</p>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;
