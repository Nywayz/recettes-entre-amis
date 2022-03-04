const ingredientsListMock = {
    0: {
      name: "fraise",
      icon: "ico.png",
      unit: "",
      externalId: 34342
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

  const recipesMock = {
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

  export {ingredientsListMock, recipesMock}