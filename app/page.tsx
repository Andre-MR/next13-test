import styles from "./page.module.css";

export const revalidate = 60;

export default async function Home() {
  const date = new Date().toISOString();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </h1>
        <p className={styles.description}>{date}</p>
      </main>
    </div>
  );
}
