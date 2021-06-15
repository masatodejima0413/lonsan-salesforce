import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <Link href="/">
        <a className={styles.blogName}>ねこのSalesforceめも</a>
      </Link>
    </div>
  );
};

export default Header;
