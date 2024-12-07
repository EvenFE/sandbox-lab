import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export const dynamic = "force-static";

interface SearchParams {
  q?: string | number | boolean;
}

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const searchResultBooks: BookData[] = await response.json();

  return (
    <div>
      {searchResultBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
