import './App.css';
import bootstrap from './styles/bootstrap.css'
import { useState } from 'react';
import ListedItem from './components/listedItem';


const App = () => {

  const [selectedRecipe, setSelectedRecipe] = useState(0)
  const [listToCreate, setListToCreate] = useState([])

  const ingredientsList = {
    0: {
      name: "fraise",
      icon: "ico.png",
      unit: ""
    },
    1: {
      name: "noix de coco",
      icon: "ico.png",
      unit: "g"
    },
    2: {
      name: "riz",
      icon: "ico.png",
      unit: "g"
    },
    3: {
      name: "lait",
      icon: "ico.png",
      unit: "L"
    }
  }

  const recipes = {
    0: {
      name: "Riz au lait",
      ingredients: [
        {
          id: 3,
          quantity: 3
        },
        {
          id: 2,
          quantity: 500
        }

      ]
    },
  }

  return (
    <>
      <div className="container">
        <div className="row">

          <ul className="list-group col-3 p-3">
            {Object.keys(ingredientsList).map((key) => 
              <ListedItem key={key} id={key} name={ingredientsList[key].name} unit={ingredientsList[key].unit} list={listToCreate} setList={setListToCreate}/>
            )}
            {listToCreate.length > 0 &&
              <li className="list-group-item list-group-item-success d-flex flex-column align-items-center" onClick={() => {console.log(listToCreate)}}>
                <div className="h4">
                  Nommez pour ajouter : 
                </div>
                <input type="text"/>
                <div className="bg-secondary rounded-3 px-3 mt-2 text-white">
                  Valider
                </div>
              </li>
              
            }
          </ul>

          <ul className="list-group col-3 p-3">
            {Object.keys(recipes).map((key) => (
              <li key={key} className={(key === selectedRecipe) ? "list-group-item active" : "list-group-item"}
              onClick={() => {setSelectedRecipe(key)}}>
                    {recipes[key].name}
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
                  {recipes[selectedRecipe].ingredients.map((ingredient) =>
                    <li key={ingredient.id} className="list-group-item">
                      {ingredient.quantity}{ingredientsList[ingredient.id].unit} de {ingredientsList[ingredient.id].name}
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
