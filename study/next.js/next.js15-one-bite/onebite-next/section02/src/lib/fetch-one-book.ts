import { Book } from "@/components/book-item/@type/book-item.type";

export default async function fetchOneBook(id: number): Promise<Book | null> {
  const url = `https://onebite-books-server-main-peach-psi.vercel.app/book/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
