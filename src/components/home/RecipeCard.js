import React from "react";
import { RecipeCard, RecipeHeader, RecipeImage, Button } from "./homeStyle";
import { useHistory } from "react-router-dom";

const RecipeCardComp = ({ recipe }) => {
  const history = useHistory();
  const viewMore = () => {
    history.push({
      pathname: "/details",
      recipe: recipe,
    });
  };

  return (
    <RecipeCard>
      <RecipeHeader>{recipe?.label}</RecipeHeader>
      <RecipeImage src={recipe?.image} alt={recipe?.label} />
      <Button onClick={viewMore}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;