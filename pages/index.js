import styles from '../styles/Home.module.css';
import posts from '../data/posts';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Nextflix </h1>
      <section className={styles.posts}>
        {posts.map(({ id, title, date, image, content }) => (
          <article key={id} className={styles.post}>
            <img src={image} alt={title} className={styles.postImage} />
            <h2 className={styles.postTitle}>{title}</h2>
            <time className={styles.postDate}>{date}</time>
            <p className={styles.postContent}>{content}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
