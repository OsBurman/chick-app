import LogoImg from './25224_294121_10150_image.jpg';
import css from './Logo.module.css';

export const Logo = () => (
  <img src={LogoImg} className={css.logo} />
);