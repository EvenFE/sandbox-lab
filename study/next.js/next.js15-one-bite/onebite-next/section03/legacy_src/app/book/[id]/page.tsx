interface Props {
  params: Promise<{ id: string }>;
}

export default async function BookPage({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Book Page {id}</h1>
    </div>
  );
}
