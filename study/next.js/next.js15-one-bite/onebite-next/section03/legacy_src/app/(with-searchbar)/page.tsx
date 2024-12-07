import ServerComponent from "../../components/server-component";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <ClientComponent> */}
      <ServerComponent />
      {/* </ClientComponent> */}
    </div>
  );
}
