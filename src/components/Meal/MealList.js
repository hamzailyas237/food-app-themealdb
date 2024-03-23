import React from 'react';
import "./Meal.scss";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { useFavoritesContext } from '../../context/favouritesContext';
import { addToFavorites, removeFromFavorites } from '../../actions/favoritesActions';

const MealList = ({ meals }) => {
  const { dispatch, favorites } = useFavoritesContext();

  const handleAddToFavorites = (meal) => {
    addToFavorites(dispatch, meal);
  };

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(dispatch, id);
  };


  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='sc-title'>meals</div>
        <section className='sc-meal grid'>

          {
            meals?.map(mealItem => {
              const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;
              const isFavorite = favorites.some(favorite => favorite.idMeal === id);

              return (
                <div className="meal-itm align-center justify-center" key={id}>
                  <Link to={`/meal/${id}`} >
                    <div className='meal-itm-img'>
                      <img src={thumbnail} alt={meal} />
                      <div className='meal-itm-cat bg-orange text-orange fw-6'>{category}</div>
                    </div>
                  </Link>


                  <div className='meal-itm-body'>
                    <div className='meal-itm-body-info flex flex-column'>
                      <div className='area fs-14 ls-1 fw-5'>{area}</div>
                      <div className='flex-row'>
                        <div className='meal fw-15 fw-7 op-09'>{meal}</div>
                        <div onClick={isFavorite ? () => handleRemoveFromFavorites(id) : () => handleAddToFavorites(mealItem)}
                          className='meal fw-15 fw-7 op-09'>
                          <FaHeart color={isFavorite ? 'red' : 'gray'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default MealList