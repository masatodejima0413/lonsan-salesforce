import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const sendMail = async () => {
    console.log("send mail");
    const res = await fetch("http://localhost:3000/api/send_mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      <form>
        <div className={styles.section}>
          <label>お名前</label>
          <input type="text"></input>
        </div>
        <div className={styles.section}>
          <label>メールアドレス</label>
          <input type="text"></input>
        </div>
        <div className={styles.section}>
          <label>お問い合わせの種類</label>
          <select>
            <option value="ブログ・記事に関するご質問・ご意見">
              ブログ・記事に関するご質問・ご意見
            </option>
            <option value="お仕事のご依頼">お仕事のご依頼</option>
            <option value="広告掲示のご依頼">広告掲示のご依頼</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <div className={styles.section}>
          <label>本文</label>
          <textarea rows="15"></textarea>
        </div>
        <div className={styles.section}>
          <div className={styles.button} onClick={sendMail}>
            送信
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
