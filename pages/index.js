// pages/index.js
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

export default function Index({ home }) {
  return (
    <>
      <Header />
      <Home home={home} />
      <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const home = await fetch(
    "https://lonsan-salesforce.microcms.io/api/v1/home",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      home: home,
    },
  };
};
