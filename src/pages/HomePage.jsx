import React from "react";
import { Link } from "react-router-dom";
import axume from "../images/axume.jpeg";
import lalibela from "../images/lalibela.jpeg";
import tana from "../images/tana.jpeg";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home-container">
        <section className="hero">
          <h1>Explore Ethiopia</h1>
          <p className="heropara">
            Discover the breathtaking landscapes and rich heritage of Ethiopia
          </p>
          <Link to="/about">
            <button className="btn-primary">Learn More</button>
          </Link>
        </section>

        <section className="explore-more">
          <h2>Explore more:</h2>
          <div className="cards">
            <div className="card">
              <img src={lalibela} alt="Lalibela" />
              <p>
                Lalibela is famous for its 12th-century rock-hewn churches
                carved from solid stone. The churches, such as Bete Giyorgis,
                are significant religious and architectural landmarks. Visitors
                and pilgrims are drawn to its rich spiritual .
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="card">
              <img src={tana} alt="Tana" />
              <p>
                Lake Tana, the source of the Blue Nile, is Ethiopia’s largest
                lake and home to ancient monasteries. The lake's islands
                preserve historical manuscripts and religious artifacts.
                Visitors can enjoy serene boat trips and visit the.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="card">
              <img src={axume} alt="Axum" />
              <p>
                The statues of Axum, often depicting ancient kings and royal
                figures, showcase the artistry and cultural heritage of the
                Axumite Empire. Carved from stone, these statues highlight the
                civilization's craftsmanship and hold significant.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <footer>
          <p>&copy; 2017 - yohannis abay</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
