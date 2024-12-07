import BookItem from "@/components/book-item/book-item";
import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import styles from "./index.module.css";

export const getStaticProps = async () => {
  const [allBooks, recoBooks] = await Promise.all([fetchBooks(), fetchRandomBooks()]);

  return {
    props: {
      allBooks,
      recoBooks,
    },
  };
};

export default function Home({ allBooks, recoBooks }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" /> {/* NOTE: 이미지 경로는 public 디렉토리 기준 */}
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요." />
      </Head>
      <div className={styles.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {recoBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

/**
 * NOTE: Root컴포넌트에서 각 페이지마다 다른 레이아웃을 사용할 수 있게 합니다.
 * JS의 함수는 모두 객체라서 메서드를 추가할 수 있는 것.
 */
Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
