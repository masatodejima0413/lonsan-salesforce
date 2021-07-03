import { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(
    "ブログ・記事に関するご質問・ご意見"
  );
  const [body, setBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkName = () => {
    if (name.length < 1) {
      setErrorMessage("名前を入力してください。");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const checkEmail = () => {
    if (email.length < 1) {
      setErrorMessage("メールアドレスを入力してください。");
      return false;
    }
    const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!email.match(reg)) {
      setErrorMessage("正しいメールアドレスを入力してください。");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const sendMail = async () => {
    if (!checkName() || !checkEmail()) {
      console.log("error");
      return;
    }

    console.log("sendMail start");
    const res = await fetch(`/api/send_mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        mailfrom: email,
        category,
        body,
      }),
    });
    if (res.status === 200) {
      var json = await res.json();
      alert("メールが送信されました。\nお問い合わせ頂きありがとうございます。");
      setName("");
      setEmail("");
      setCategory("ブログ・記事に関するご質問・ご意見");
      setBody("");
      setErrorMessage("");
      console.log("complete sendMail");
    } else {
      throw new Error(await res.text());
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お問い合わせ</h1>
      {errorMessage.length > 0 && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      <form>
        <div className={styles.section}>
          <label>お名前</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={checkName}
          ></input>
        </div>
        <div className={styles.section}>
          <label>メールアドレス</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={checkEmail}
          ></input>
        </div>
        <div className={styles.section}>
          <label>お問い合わせの種類</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option defaultValue value="ブログ・記事に関するご質問・ご意見">
              ブログ・記事に関するご質問・ご意見
            </option>
            <option value="お仕事のご依頼">お仕事のご依頼</option>
            <option value="広告掲示のご依頼">広告掲示のご依頼</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <div className={styles.section}>
          <label>本文</label>
          <textarea
            rows="15"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
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
