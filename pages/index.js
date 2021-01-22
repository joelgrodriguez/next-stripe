import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../products.json";
import { initiateCheckout } from "../lib/payments";

export default function Home() {
  console.log("products", products);
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Space Jelly Shop</a>
        </h1>

        <p className={styles.description}>
          The best space jelly swag in the galaxy.
        </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            console.log(product);
            const { id, title, price, description, image } = product;
            return (
              <li className={styles.card} key={id}>
                <a href="https://nextjs.org/docs">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </a>
                <p>
                   
                    <button className={styles.button} onClick={() => {
                      initiateCheckout({
                        lineItems: [
                          {
                            price: id,
                            quantity: 1
                          }
                        ]
                      })
                    }}>Buy</button>
                  </p>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
