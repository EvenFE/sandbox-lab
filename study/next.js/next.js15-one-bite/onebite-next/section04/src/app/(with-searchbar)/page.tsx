import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import style from "./page.module.css";

async function RandomBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {
    next: {
      revalidate: 3,
    },
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const randomBooks: BookData[] = await response.json();

  return (
    <>
      {randomBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}

async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: "no-store" });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const allBooks: BookData[] = await response.json();

  return (
    <>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RandomBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
