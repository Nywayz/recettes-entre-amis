import React, { useState } from 'react';


const useApp = () => {

  const [selectedRecipe, setSelectedRecipe] = useState(0)
  const [name, setName] = useState("")
  const [listToCreate, setListToCreate] = useState([])
  const [ingredientsListFromApi, setIngredientsListFromApi] = useState([])
  const [recipesListFromApi, setRecipesListFromApi] = useState([])

  const getIngredients = () => {
    return new Promise ( (resolve) => {
      fetch('https://api-fruits.herokuapp.com/api/ingredients')
      .then(results => results.json())
      .then(data => {
        setIngredientsListFromApi(Object.assign({}, data))
        resolve(true)
      })
    })
  }

  const getRecipes = () => {
    return new Promise ( (resolve) => {
      fetch('https://api-fruits.herokuapp.com/api/recipes')
      .then(results => results.json())
      .then(data => {
        setRecipesListFromApi(Object.assign({}, data))
        console.log(Object.assign({}, data))
        resolve(true)
      })
    })
  }

  return{
      selectedRecipe,
      name,
      listToCreate,
      ingredientsListFromApi,
      recipesListFromApi,
      setSelectedRecipe, setName, setListToCreate, setIngredientsListFromApi, getIngredients, getRecipes
}
}

export default useApp;
