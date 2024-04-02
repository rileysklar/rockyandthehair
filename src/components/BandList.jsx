import styles from "./styles/MovieTicket.module.css";
const artists = [
  {
    name: "Rickshaw Billies Burger Patrol",
    website: "https://rickshawbilliesburgerpatrol.com/",
    image_path: "src/assets/rickshaw.jpg",
  },
  {
    name: "Die Spitz",
    website: "https://diespitz.bandcamp.com/",
    image_path: "src/assets/die.jpg",
  },
  {
    name: "Madam Radar",
    website: "https://www.madamradar.com/",
    image_path: "src/assets/madam.jpg",
  },
  {
    name: "StepMom (OKC)",
    website: "https://www.stepmomband.com/",
    image_path: "src/assets/step.jpg",
  },
  {
    name: "The Jaws of Brooklyn (SEA)",
    website: "https://jawsofbrooklyn.com/",
    image_path: "src/assets/jaws.jpg",
  },
  {
    name: "Aubrey Haddard (NYC)",
    website: "https://www.aubreyhaddard.com/",
    image_path: "src/assets/aubrey.jpg",
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

  return (
    <>
      {artists.map((artist, index) => (
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
                <td className={styles.bigger}>18</td>
                <td className={styles.bigger}>H</td>
                <td className={styles.bigger}>24</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>PRICE</th>
                <th>DATE</th>
                <th>TIME</th>
              </tr>
              <tr>
                <td>$12.00</td>
                <td>4/20/24</td>
                <td>19:30</td>
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
                {/* Assuming this is the serial number to be displayed */}
                <td>9</td>
                <td>1</td>
                <td>7</td>
                <td>3</td>
                <td>7</td>
                <td>5</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>5</td>
                <td>4</td>
                <td>1</td>
                <td>4</td>
                <td>7</td>
                <td>8</td>
                <td>7</td>
                <td>3</td>
                <td>4</td>
                <td>1</td>
                <td>4</td>
                <td>5</td>
                <td>2</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieTicket;
