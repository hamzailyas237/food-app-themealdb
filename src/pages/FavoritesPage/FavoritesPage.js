import React from 'react'
import { useFavoritesContext } from '../../context/favouritesContext';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { removeFromFavorites } from '../../actions/favoritesActions';

const FavoritesPage = () => {
    const { dispatch, favorites } = useFavoritesContext();

    const handleRemoveFromFavorites = (id) => {
        removeFromFavorites(dispatch, id);
    };

    return (
        <div className='section-wrapper'>
            <div className='container'>
                <div className='sc-title'>Favorites</div>
                <section className='sc-meal grid'>
                    {
                        favorites?.map(mealItem => {
                            const { idMeal: id, category, strMeal: title, strMealThumb: thumbnail } = mealItem;

                            return (
                                <div className="meal-itm align-center justify-center" key={id}>
                                    <Link to={`/meal/${id}`}>
                                        <div className='meal-itm-img'>
                                            <img src={thumbnail} alt={title} />
                                            <div className='meal-itm-cat bg-orange text-orange fw-6'>{category}</div>
                                        </div>
                                    </Link>
                                    <div className='meal-itm-body'>
                                        <div className='meal-itm-body-info flex flex-column'>
                                            <div className='flex-row'>
                                                <div className='meal fw-15 fw-7 op-09'>{title}</div>
                                                <div onClick={() => handleRemoveFromFavorites(id)} className='meal fw-15 fw-7 op-09'><FaHeart color="red" />
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

export default FavoritesPage