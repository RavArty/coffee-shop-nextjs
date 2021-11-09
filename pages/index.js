import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";

export default function Home() {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores newarby"
          handleOnClick={handleOnClick}
        />
        <div className={styles.heroImage}>
          <Image alt="" width={700} height={400} src="/static/hero-image.png" />
        </div>
      </main>
    </div>
  );
}
