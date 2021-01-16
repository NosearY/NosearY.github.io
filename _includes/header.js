import styles from "./header.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Nosear Yuan";
const bio = "一个大龄程序员的非技术博客";

export default function Header({ isHome }) {
  return (
    <header className={`${isHome ? styles.header : ""}`}>
      {isHome ? (
        <>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <div>
            <span className={utilStyles.headingXl}>{name}</span>
            <span> | {bio}</span>
          </div>
        </>
      ) : (
        <></>
      )}
    </header>
  );
}
