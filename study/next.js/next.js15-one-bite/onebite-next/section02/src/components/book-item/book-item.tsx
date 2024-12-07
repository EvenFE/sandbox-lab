import Link from "next/link";
import type { Book } from "./@type/book-item.type";
import styles from "./book-item.module.css";

export default function BookItem({ id, title, subTitle, author, publisher, coverImgUrl }: Book) {
  return (
    <Link href={`/book/${id}`} className={styles.container}>
      <img src={coverImgUrl} className={styles.img} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <br />
        <div className={styles.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
