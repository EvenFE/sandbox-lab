import { ReactNode } from "react";
import { useSearch } from "./@hooks/useSearch";
import styles from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: { children: ReactNode }) {
  const { search, onKeydownSearch, onChangeSearch, onSubmit } = useSearch();

  return (
    <div>
      <div className={styles.container}>
        <input value={search} onKeyDown={onKeydownSearch} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
