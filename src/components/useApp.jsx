import React, { useState } from 'react';


const useApp = () => {

  const [selectedRecipe, setSelectedRecipe] = useState(0)
  const [name, setName] = useState("")
  const [listToCreate, setListToCreate] = useState([])
  const [ingredientsListFromApi, setIngredientsListFromApi] = useState([])

  const getIngredients = () => {
    return new Promise ( (resolve) => {
      fetch('http://my-api/ingredients')
      .then(results => results.json())
      .then(data => {
        setIngredientsListFromApi(data)
        console.log(data)
        resolve(true)
      })
    })
  }


  return{
      selectedRecipe,
      name,
      listToCreate,
      ingredientsListFromApi,
      setSelectedRecipe, setName, setListToCreate, setIngredientsListFromApi, getIngredients
}
}

export default useApp;
