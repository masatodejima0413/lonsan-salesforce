import styles from "./Balloon.module.scss";

const Balloon = ({ balloonInfo }) => {
  return (
    <div
      className={
        balloonInfo.direction[0] === "左向き"
          ? styles.balloonToLeft
          : styles.balloonToRight
      }
    >
      <div className={styles.speaker}>
        <img
          className={styles.image}
          src={balloonInfo.image.url}
          alt={balloonInfo.speaker}
        />
        <p>{balloonInfo.speaker}</p>
      </div>
      <div className={styles.balloon}>
        {balloonInfo.comment.split("\n").map((str) => (
          <>
            {str}
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default Balloon;
