import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <a className={css.link} href="https://www.chick-fil-a.com/menu">Recipes For Cool People</a>
    </header>
  )
}

export default Header