export const fetchRecipes = async () => {
    const response = await fetch('http://localhost:3001/recipes');
    const data = await response.json();
    return data;
};