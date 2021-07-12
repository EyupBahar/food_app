import React, { useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const ID = '2c6fceed';
const KEY = '28f5d8623b7f7c006eded48d4c245d62 ';

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  
  // const KEY = process.env.KEY;
  // const ID = process.env.ID;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&mealType=${"breakfast"}`;
  // const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  
  const getData = async () => {
    console.log(ID,KEY);
    if (query !== "") {
      const result = await axios.get(url);
      if (result.status === 200) {
        console.log(query);
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
