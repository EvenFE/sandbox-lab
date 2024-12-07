import { BookData } from "@/types";

export default async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, { cache: "force-cache" });
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }
  const allBooks: BookData[] = await response.json();
  const booksCount = allBooks.length;

  return <p>{booksCount}</p>;
}
