import fetchOneBook from "@/lib/fetch-one-book";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import style from "./[id].module.css";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } }, // 반드시 문자열로 값을 넣어야 한다.
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
    },
  };
};

export default function BookDetailPage({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback)
    return (
      <>
        <Head>
          <title>한입북스 - 검색결과</title>
          <meta property="og:image" content="/thumbnail.png" /> {/* NOTE: 이미지 경로는 public 디렉토리 기준 */}
          <meta property="og:title" content="한입북스 - 검색결과" />
          <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요." />
        </Head>
        <div>로딩 중...</div>
      </>
    );
  if (!book) return "문제가 발생했습니다.";

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} /> {/* NOTE: 이미지 경로는 public 디렉토리 기준 */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style["top-container"]}>
        <div style={{ backgroundImage: `url('${coverImgUrl}')` }} className={style.container}>
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>

        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
