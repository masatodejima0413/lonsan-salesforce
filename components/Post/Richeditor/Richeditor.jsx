import styles from "./Richeditor.module.scss";

const Richeditor = ({ content }) => {
  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{
        __html: `${content}`,
      }}
    />
  );
};

export default Richeditor;
