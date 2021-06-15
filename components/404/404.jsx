import styles from "./404.module.scss";

const Comp404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fourOhFour}>
        <span className={styles.irisblue}>4</span>
        <span className={styles.darkpink}>0</span>
        <span className={styles.irisblue}>4</span>
      </div>
      <div className={styles.sentence}>
        ページが見つかりません。
        <br />
        URLを再度ご確認ください。
      </div>
    </div>
  );
};

export default Comp404;
