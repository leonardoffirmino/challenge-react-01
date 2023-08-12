import styles from './Header.module.css';

import logoImage from '../assets/Logo.svg';



export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImage} alt="Logotipo principal do projeto de todo list" />
    </header>
  )
}
