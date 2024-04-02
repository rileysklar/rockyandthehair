import MovieTicket from "../components/BandList";

import "../components/styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>{document.title}</h1>
        <h2>Booking</h2>
      </div>
      <div className="section">
        <h2 className="sub-title">Artists we have worked with</h2>
        <div className="band-list">
          <MovieTicket />
        </div>
      </div>
    </>
  );
}
