import React, { useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./homeStyle";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";

const APP_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_API_ID;

console.log(APP_KEY, APP_ID);

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
// const APP_ID = "4e9f05eb";
// const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (result.status === 200) {
        console.log(result.data.hits);
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
};

export default Home;
