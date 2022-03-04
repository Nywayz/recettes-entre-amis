import './App.css';
import bootstrap from './styles/bootstrap.css'
import React, { useState } from 'react';
import ListedItem from './components/ListedItem';
import useApp from './components/useApp'
import { recipesMock as recipes, ingredientsListMock as ingredientsList, ingredientsListMock, recipesMock } from './mocks/mocks';


const App = () => {

  const {
    selectedRecipe,
    name,
    listToCreate,
    ingredientsListFromApi,
    recipesListFromApi,
    setSelectedRecipe, setName, setListToCreate, setIngredientsListFromApi, getIngredients, getRecipes
  } = useApp();

  React.useEffect(() => {
    fetch('https://api.nal.usda.gov/fdc/v1/food/454004?&api_key=IcDKnpmcqO8Uzyk6ryX87d1HDzHI8shkekq0qIox')
      .then(results => results.json())
      .then(data => {
        const calories = data.labelNutrients.calories.value
        console.log(calories)
      });
    getIngredients();
    getRecipes();
    console.log(recipesMock)
  }, []); 


  return (
    <>
      <div className="container">
        <div className="row">

          <ul className="list-group col-3 p-3">
            {Object.keys(ingredientsListFromApi).map((key) => 
              <ListedItem key={key} id={key} name={ingredientsListFromApi[key].name} unit={ingredientsListFromApi[key].unit} list={listToCreate} setList={setListToCreate}/>
            )}
            {listToCreate.length > 0 &&
              <li className="list-group-item list-group-item-success d-flex flex-column align-items-center">
                <div className="h4">
                  Nommez pour ajouter : 
                </div>
                <input type="text" className="nameInput"/>
                <div className="bg-secondary createRecipe rounded-3 px-3 mt-2 text-white" onClick={() => {console.log(listToCreate)}}>
                  Valider
                </div>
              </li>
              
            }
          </ul>

          <ul className="list-group col-3 p-3">
            {Object.keys(recipesListFromApi).map((key) => (
              <li key={key} className={(key === selectedRecipe) ? "list-group-item active recipe" : "list-group-item recipe"}
              onClick={() => {setSelectedRecipe(key)}}>
                    {recipesListFromApi[key].name}
              </li>
          ))}
          </ul>

          <div className="col-6 p-3">
            {(selectedRecipe !== 0) ?
              <div>
                <div className="h2">
                  Votre recette :
                </div>
                <ul className="list-group list-group-flush">
                  {recipesListFromApi[selectedRecipe].ingredients.map((ingredient) =>
                    <li key={ingredient.id} className="list-group-item">
                      {ingredient.quantity}{ingredientsListFromApi[ingredient.id].unit} de {ingredientsListFromApi[ingredient.id].name}
                    </li>
                  )}
                  </ul>
              </div>
              :
              <div className="h2">
                Sélectionnez une recette 
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
