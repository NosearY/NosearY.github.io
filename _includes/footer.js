import styles from "./footer.module.css";
import { format } from "date-fns";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer_text}>{`Copyright © ${format(
        new Date(),
        "yyyy"
      )} by Noseary Yuan`}</p>
    </footer>
  );
}
