import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useSearch = () => {
  const router = useRouter();
  const q = router.query.q as string;

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!q) return;
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeydownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!search || search === q) return;
    router.push(`/search?q=${search}`);
  };

  return {
    search,
    onKeydownSearch,
    onChangeSearch,
    onSubmit,
  };
};
