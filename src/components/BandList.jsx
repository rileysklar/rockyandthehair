import styles from "./styles/MovieTicket.module.css";
import rickshawImage from "../public/rickshaw.jpg";
import dieImage from "../public/die.jpg";
import madamImage from "../public/madam.jpg";
import stepImage from "../public/step.jpg";
import jawsImage from "../public/jaws.jpg";
import aubreyImage from "../public/aubrey.jpg";

const artists = [
  {
    name: "Rickshaw Billies Burger Patrol",
    website: "https://rickshawbilliesburgerpatrol.com/",
    image_path: rickshawImage,
  },
  {
    name: "Die Spitz",
    website: "https://diespitz.bandcamp.com/",
    image_path: dieImage,
  },
  {
    name: "Madam Radar",
    website: "https://www.madamradar.com/",
    image_path: madamImage,
  },
  {
    name: "StepMom (OKC)",
    website: "https://www.stepmomband.com/",
    image_path: stepImage,
  },
  {
    name: "The Jaws of Brooklyn (SEA)",
    website: "https://jawsofbrooklyn.com/",
    image_path: jawsImage,
  },
  {
    name: "Aubrey Haddard (NYC)",
    website: "https://www.aubreyhaddard.com/",
    image_path: aubreyImage,
  },
];

const MovieTicket = () => {
  const code =
    "11010010000100111011001011101111011010001110101110011001101110010010111101110111001011001001000011011000111010110001001110111101101001011010111000101101";

  const renderBarcode = (codeString) => {
    return [...codeString].map((bit, index) => (
      <td
        key={index}
        style={{
          backgroundColor: bit === "1" ? "black" : "white",
          width: "3px",
          height: "50px",
        }}
      ></td>
    ));
  };
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <>
      {artists.map((artist, index) => {
        const section = letters.charAt(
          Math.floor(Math.random() * letters.length)
        ); // Random letter for each artist
        const row = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        const seat = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
        const hour = Math.floor(Math.random() * 24) + 1;

        return (
          <div className={styles.ticket} key={index}>
            <div className={styles["holes-top"]}></div>
            <div className={styles.title}>
              <p className={styles.cinema}>ROCKY AND THE HAIR PRESENTS</p>
              <p className={styles["movie-title"]}>{artist.name}</p>
            </div>
            <div className={styles.poster}>
              <img src={artist.image_path} alt={`Artist: ${artist.name}`} />
            </div>
            <div className={styles.info}>
              <table>
                <tr>
                  <th>SECTION</th>
                  <th>ROW</th>
                  <th>SEAT</th>
                </tr>
                <tr>
                  <td className={styles.bigger}>{section}</td>
                  <td className={styles.bigger}>{row}</td>
                  <td className={styles.bigger}>{seat}</td>
                </tr>
              </table>
              <table>
                <tr>
                  <th>PRICE</th>
                  <th>DATE</th>
                  <th>TIME</th>
                </tr>
                <tr>
                  <td>${row}.00</td>
                  <td>4/20/24</td>
                  <td>{hour}:00</td>
                </tr>
              </table>
            </div>
            <div className={styles["holes-lower"]}></div>
            <div className={styles.serial}>
              <table className={styles.barcode}>
                <tbody>
                  <tr>{renderBarcode(code)}</tr>
                </tbody>
              </table>
              <table className={styles.numbers}>
                <tr>
                  <td>{hour}</td>
                  <td>{hour}</td>
                  <td>{row}</td>
                  <td>{seat}</td>
                  <td>{hour}</td>
                  <td>{row}</td>
                  <td>{seat}</td>
                  <td>{seat}</td>
                  <td>{hour}</td>
                  <td>{row}</td>
                  <td>{seat}</td>
                  <td>{hour}</td>
                  <td>{row}</td>
                  <td>{seat}</td>
                </tr>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieTicket;
