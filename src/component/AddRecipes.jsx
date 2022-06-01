import React from "react";

function AddRecipes({ title, image, nameCarbs, nameCalcium,nameVitamin,nameFiber,nameSugar}) {
  return (
    <article className="main-article mt-5 col ">
      <div className=" text-center main-article-child col">
        <div className="article-title col text center">{title}</div>
        <div className="article-image col">
          <img src={image} alt="This is pic" className="image-test mt-4" />
        </div>
        <div className="advance-search-container text-center">
          <div className="carbs">{nameCarbs}</div>
          <div className="calcuim">{nameCalcium}</div>
          <div className="vitamin">{nameVitamin}</div>
          <div className="fiber">{nameFiber}</div>
          <div className="sugar">{nameSugar}</div>
        </div>
      </div>
    </article>
  );
}

export default AddRecipes;
