import css from './Nutrition.module.css';

export const Nutrition = ({
  name,
  calories,
  protein_g: protein,
  serving_size_g: servingSize,
  sodium_mg: sodium,
  fat_total_g: totalFat,
}) => {
  const capitalizedName = name[0].toUpperCase() + name.substring(1);

  return (
  <div className={css.nutrition}>
    <p className={css.title}>{capitalizedName} - Serving Size (g) {servingSize}</p>
    <div className={css.nutritionInfoContainer}>
      <div>
        <p>Calories: {calories}</p>
        <p>Protein: {protein}g</p>
      </div>
      <div css>
        <p>Total Fat: {totalFat}g</p>
        <p>Sodium: {sodium}mg</p>
      </div>
    </div>
  </div>
)};