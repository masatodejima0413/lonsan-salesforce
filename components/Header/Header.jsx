import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.blogName}>
          <img src="/logo.svg" alt="forcecats" className={styles.logo} />
        </a>
      </Link>
    </div>
  );
};

export default Header;
