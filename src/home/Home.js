import React, { useState} from "react";
import axios from "axios";

const APP_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_API_ID;

console.log(APP_KEY, APP_ID);

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
}

const getData = async () => {
    if (query !== "") {
        const result = await axios.get(url);
        if (result.status === 200) {
            setRecipes(result.data.hits);
        }
     } else {
         alert("Please fill the form!");
     }
};

return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe?.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
export default Home;