import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../services/recipesService';
import { setRecipes } from '../../store/recipesSlice';

const Recipes = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes);

    useEffect(() => {
        const loadRecipes = async () => {
            const data = await fetchRecipes();
            dispatch(setRecipes(data));
        };

        loadRecipes();
    }, [dispatch]);

    return (
        <div>
            Some stuff will happen here
        </div>
    );
};

export default Recipes;
