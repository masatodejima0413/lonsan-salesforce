import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="">
            <a>サイトマップ</a>
          </Link>
        </li>
        <li>
          <Link href="/post/disclaimers">
            <a>免責事項</a>
          </Link>
        </li>
        <li>
          <Link href="/post/privacy-policy">
            <a>プライバシーポリシー</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>お問い合わせ</a>
          </Link>
        </li>
      </ul>
      <div className={styles.copyright}>
        ©️ ねこのSalesforceめも All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
