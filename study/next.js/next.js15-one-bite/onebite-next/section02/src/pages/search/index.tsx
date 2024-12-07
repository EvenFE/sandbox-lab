// next/navigation은 App Router에서 사용하기 때문에 next/router에 있는 useRouter를 꺼내온다.
import BookItem from "@/components/book-item/book-item";
import SearchableLayout from "@/components/searchable-layout/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const {
    query: { q },
  } = context;

  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
};

export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
