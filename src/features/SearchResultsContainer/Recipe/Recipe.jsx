import css from './Recipe.module.css';

export const Recipe = ({
  title,
  image,
  likes,
}) => {

  return (
    <div className={css.recipe}>
      <img className={css.image} src={image} alt={`${title} recipe image`} />
      <div className={css.infoContainer}>
        <p className={css.title}>{title}</p>
        <p className={css.likes}>Likes • {likes}</p>
      </div>
    </div>
  );
}