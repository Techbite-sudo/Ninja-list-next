import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
          ratione nobis eveniet placeat pariatur voluptas autem magni ipsum esse
          non distinctio excepturi repellendus recusandae sed minima, ducimus
          unde? Magni, esse?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, autem
          amet assumenda at voluptate, vero laudantium similique dicta
          blanditiis qui architecto incidunt aut iusto reiciendis minus.
          Dolorem, officiis doloribus? Eligendi!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listings
        </Link>
      </div>
    </>
  );
}
