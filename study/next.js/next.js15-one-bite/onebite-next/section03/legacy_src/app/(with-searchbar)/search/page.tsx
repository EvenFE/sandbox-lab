interface SearchParams {
  q: string;
}

interface Props {
  searchParams: Promise<SearchParams>;
}
export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams;

  return <div>검색어 : {q}</div>;
}
