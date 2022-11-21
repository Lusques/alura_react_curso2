import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <figure>
        <img src={logo} alt="Logo do Alura Space" />
      </figure>
      <label className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text" placeholder="o que você procura?" />
        <figure className="m-0">
          <img src={search} alt="" />
        </figure>
      </label>
    </header>
  );
}
