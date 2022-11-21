import home from "./home.png";
import maisCurtidas from "./mais-curtidas.png";
import maisVistas from "./mais-vistas.png";
import novas from "./novas.png";
import surpreendaMe from "./surpreenda-me.png";
import styles from "./menu.module.scss";

const menuItems = [
  {
    img: home,
    title: "Ínicio",
  },
  {
    img: maisVistas,
    title: "Mais vistas",
  },
  {
    img: maisCurtidas,
    title: "Mais curtidas",
  },
  {
    img: novas,
    title: "Novas",
  },
  {
    img: surpreendaMe,
    title: "Surpreenda-me",
  },
];
export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {menuItems.map((e) => (
          <li className={styles.menu__item}>
            <figure className={`m-0 ${styles.menu_item}`}>
              <img src={e.img} alt={e.title} />
            </figure>
            <a href="/">{e.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
