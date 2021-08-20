import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="antialiased">
      <Head>
        <title>欢迎来到 kk 的小站</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <h1>zwkang's blog</h1>
          <nav>
            <ul>
              <li>
                <a href="/home"></a>
              </li>
              <li>
                <a href="/about"></a>
              </li>
              <li>
                <a href="/rss"></a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div>
        <main className={styles.main}>
          <article>
            <header>
              <h1></h1>
              <div>
                <span>
                  <time>时间</time>
                </span>
              </div>
              <picture>
                <img />
              </picture>
            </header>
            <div>内容</div>
            <footer></footer>
          </article>
        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
