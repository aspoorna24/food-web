const Foods = [
    {
      id: 1,
      title: "Bread",
      desc: "Bread is a staple food made from a dough of flour and water, usually by baking. It has been a fundamental part of human diets for thousands of years. The dough is often left to rise before baking, allowing yeast or another leavening agent to cause it to expand. Bread can be made in various forms, including loaves, rolls, and baguettes. Its texture can range from light and airy to dense and chewy, depending on the recipe and preparation. The taste is mildly savory, and it pairs well with butter, jam, or savory toppings like cheese.",
      category: "breakfast",
      type: "veg",
      img: "bread.png",
      ingredients: ["Flour", "Water", "Yeast", "Salt", "Sugar"],
      steps: ["Mix ingredients", "Knead dough", "Let dough rise", "Shape the dough", "Bake at 375°F"]
    },
    {
      id: 2,
      title: "Pancakes",
      desc: "Pancakes are fluffy, round cakes made from a simple batter of flour, eggs, milk, and butter. These are usually cooked on a griddle or frying pan. The texture is soft and light, with a slightly crispy edge when done correctly. The taste is sweet and buttery, often enhanced by syrup, berries, or whipped cream. Pancakes are a favorite for breakfast, and you can add various toppings like chocolate chips, bananas, or nuts for extra flavor.",
      category: "breakfast",
      type: "veg",
      img: "pancakes.png",
      ingredients: ["Flour", "Milk", "Eggs", "Butter", "Baking powder", "Sugar"],
      steps: ["Mix dry and wet ingredients", "Heat pan", "Pour batter", "Cook each side", "Serve with toppings"]
    },
    {
      id: 3,
      title: "Spaghetti Bolognese",
      desc: "Spaghetti Bolognese is a classic Italian dish made of pasta topped with a rich, flavorful meat sauce. The sauce is typically made from ground beef, tomatoes, onions, garlic, and herbs like basil and oregano. The spaghetti is cooked al dente, giving it a perfect texture to complement the hearty sauce. The sauce has a savory, slightly tangy taste, with the richness of the meat adding depth to the flavor. It's a comforting dish perfect for lunch or dinner.",
      category: "dinner",
      type: "non-veg",
      img: "spaghetti.png",
      ingredients: ["Spaghetti", "Ground beef", "Tomatoes", "Onions", "Garlic", "Herbs", "Olive oil"],
      steps: ["Cook pasta", "Brown the meat", "Saute onions and garlic", "Add tomatoes and simmer", "Toss pasta with sauce"]
    },
    {
      id: 4,
      title: "Caesar Salad",
      desc: "Caesar Salad is a refreshing dish with crisp romaine lettuce, creamy Caesar dressing, crunchy croutons, and a generous sprinkle of Parmesan cheese. The dressing is made from ingredients like egg yolk, garlic, lemon juice, Dijon mustard, and anchovies, giving it a savory and tangy flavor. The croutons add a satisfying crunch, while the Parmesan brings a sharp, salty taste. This salad is a perfect starter or a side to any meal, offering a balance of textures and flavors.",
      category: "lunch",
      type: "veg",
      img: "caesar.png",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing", "Lemon juice"],
      steps: ["Chop lettuce", "Prepare dressing", "Toss lettuce and dressing", "Top with croutons", "Serve with Parmesan"]
    },
    {
      id: 5,
      title: "Sushi",
      desc: "Sushi is a Japanese dish consisting of vinegared rice, combined with a variety of ingredients such as seafood, vegetables, and occasionally tropical fruits. The most popular form of sushi is nigiri, where a small ball of rice is topped with a slice of raw fish, but there are many types, including rolls and sashimi. The rice is slightly tangy, while the fish offers a delicate, fresh flavor. Sushi is often served with wasabi and pickled ginger to enhance the taste and cleanse the palate.",
      category: "dinner",
      type: "non-veg",
      img: "sushi.png",
      ingredients: ["Sushi rice", "Fish (salmon, tuna)", "Nori", "Soy sauce", "Wasabi", "Pickled ginger"],
      steps: ["Cook sushi rice", "Prepare fish", "Roll sushi", "Slice into pieces", "Serve with soy sauce"]
    },
    {
      id: 6,
      title: "Tacos",
      desc: "Tacos are a traditional Mexican dish made from a folded tortilla filled with various ingredients like seasoned meat, cheese, lettuce, tomatoes, and salsa. The tortilla can be soft or crunchy, and the filling can vary from beef, chicken, or fish to beans or vegetables for a vegetarian version. The flavors are bold, with spices like cumin and chili adding depth, and the toppings provide crunch and freshness. Tacos are perfect for a quick meal or a fun party snack.",
      category: "lunch",
      type: "non-veg",
      img: "tacos.png",
      ingredients: ["Tortillas", "Ground beef", "Cheese", "Lettuce", "Tomatoes", "Salsa", "Spices"],
      steps: ["Cook the meat", "Prepare toppings", "Warm tortillas", "Assemble tacos", "Serve immediately"]
    },
    {
      id: 7,
      title: "Chicken Curry",
      desc: "Chicken curry is a flavorful and aromatic dish made from chicken cooked in a spiced sauce made with ingredients like curry powder, garlic, onions, tomatoes, and coconut milk. The sauce is rich and creamy, with a balance of spices that include turmeric, cumin, and coriander. The chicken absorbs the flavors of the curry, making every bite tender and juicy. It’s often served with rice or naan bread, making it a comforting meal with a perfect blend of heat and flavor.",
      category: "dinner",
      type: "non-veg",
      img: "chicken.png",
      ingredients: ["Chicken", "Curry powder", "Coconut milk", "Tomatoes", "Garlic", "Onions", "Rice"],
      steps: ["Brown the chicken", "Saute onions and garlic", "Add curry powder", "Simmer with coconut milk", "Serve with rice"]
    },
    {
        id: 8,
        title: "Grilled Salmon",
        desc: "Grilled Salmon is a healthy and delicious seafood dish. The salmon fillets are marinated in a blend of olive oil, lemon juice, garlic, and herbs like dill or thyme before being grilled to perfection. The smoky flavor from the grill combined with the richness of the salmon creates a dish that is both flavorful and light. The fish has a tender, flaky texture, and the taste is slightly smoky with hints of citrus. It’s perfect when served with roasted vegetables or a fresh salad.",
        category: "dinner",
        type: "non-veg",
        img: "salmon.png",
        ingredients: ["Salmon fillets", "Olive oil", "Lemon juice", "Garlic", "Dill", "Salt", "Pepper"],
        steps: ["Marinate salmon", "Preheat grill", "Grill salmon", "Check for doneness", "Serve with side dishes"]
      },

  ];
  
  export default Foods;  