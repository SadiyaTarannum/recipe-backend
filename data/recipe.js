const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhULDSFhjA5Sj1gMpfCkxk8fsbDzCDsrTZw&s",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
      category: "Main Course",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
      steps: [
        "Cook the spaghetti according to package instructions.",
        "In a bowl, whisk eggs and grated Parmesan cheese.",
        "Cook pancetta in a pan until crispy.",
        "Toss the spaghetti with pancetta and remove from heat.",
        "Stir in egg mixture quickly to create a creamy sauce.",
        "Serve with extra cheese and black pepper."
      ]
    },
    {
      id: 2,
      title: "Chicken Biryani",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHoGCa4EJZ91VKaFMOqG_APxPgvqavx7W-A&s",
      description: "A flavorful and aromatic Indian rice dish with marinated chicken and spices.",
      category: "Main Course",
      ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Onions", "Spices", "Saffron"],
      steps: [
        "Marinate chicken with yogurt and spices for an hour.",
        "Cook onions until golden brown and set aside.",
        "Parboil rice with whole spices.",
        "Layer chicken and rice in a pot, adding saffron milk.",
        "Cook on low heat until flavors blend together.",
        "Garnish with fried onions and fresh coriander."
      ]
    },
    {
      id: 3,
      title: "Dosa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTICQfREtBRV1lquGCFLWoZ7ooTS9tloWEOWw&s",
      description: "A crispy and thin South Indian pancake made from fermented rice and lentil batter.",
      category: "Breakfast",
      ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt", "Oil"],
      steps: [
        "Soak rice and urad dal separately for 6 hours.",
        "Grind them to a smooth batter and ferment overnight.",
        "Heat a non-stick pan and pour a ladle of batter.",
        "Spread it thin in a circular motion and drizzle oil.",
        "Cook until golden brown and serve with chutney and sambar."
      ]
    },
    {
      id: 4,
      title: "Idli",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HgZhWAoyWuJLE6o9rmCzYWDz0R2bNBvHYw&s",
      description: "Soft and fluffy steamed rice cakes, a popular South Indian breakfast dish.",
      category: "Breakfast",
      ingredients: ["Rice", "Urad Dal", "Salt", "Water"],
      steps: [
        "Soak rice and urad dal separately for 6 hours.",
        "Grind them to a smooth batter and ferment overnight.",
        "Grease idli molds and pour the batter.",
        "Steam for 10-15 minutes until fluffy.",
        "Serve hot with coconut chutney and sambar."
      ]
    },
    {
      id: 5,
      title: "Non-Veg Tahari",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpQdFWXm_dYPHxt1Gs2bnnk7IdkMtf3CSPA&s",
      description: "A delicious and mildly spiced rice dish made with tender meat, aromatic spices, and vegetables.",
      category: "Main Course",
      ingredients: [
        "Basmati Rice", "Mutton/Chicken", "Yogurt", "Onions", "Tomatoes",
        "Ginger-Garlic Paste", "Green Chilies", "Spices (Turmeric, Coriander, Cumin, Garam Masala)",
        "Fresh Coriander", "Ghee or Oil"
      ],
      steps: [
        "Heat ghee/oil in a pan and sauté onions until golden brown.",
        "Add ginger-garlic paste, green chilies, and tomatoes. Cook until soft.",
        "Add the meat and cook until it turns brown.",
        "Mix in yogurt and spices, then cook until the oil separates.",
        "Add washed basmati rice and mix well.",
        "Pour water, cover, and cook until the meat and rice are fully done.",
        "Garnish with fresh coriander and serve hot with raita or salad."
      ]
    },
    {
      id: 6,
      title: "Masala Dosa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7JQyn0mckzsiY_7Mlw9MzT4UH7WyaC-LYg&s",
      description: "A crispy and flavorful dosa filled with a spiced potato mixture, a classic South Indian breakfast.",
      category: "Breakfast",
      ingredients: [
        "Rice", "Urad Dal", "Potatoes", "Onions", "Mustard Seeds", "Curry Leaves",
        "Turmeric", "Green Chilies", "Oil", "Salt"
      ],
      steps: [
        "Soak rice and urad dal, grind into a smooth batter, and ferment overnight.",
        "Boil and mash potatoes. Sauté onions, mustard seeds, curry leaves, and green chilies.",
        "Add turmeric and mashed potatoes, mix well.",
        "Heat a griddle, pour batter, spread into a thin circle.",
        "Place potato filling in the center, fold the dosa, and serve hot with sambar and chutney."
      ]
    },
    {
      id: 7,
      title: "Idli Sambar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1foc_gGLa-duz80XhakJyzonTX-oRwcl-Ew&s",
      description: "Soft and fluffy steamed rice cakes served with a tangy lentil stew, a healthy and comforting breakfast.",
      category: "Breakfast",
      ingredients: [
        "Rice", "Urad Dal", "Toor Dal", "Tamarind", "Vegetables (drumstick, pumpkin, brinjal)",
        "Mustard Seeds", "Curry Leaves", "Asafoetida", "Sambar Powder", "Oil", "Salt"
      ],
      steps: [
        "Soak rice and urad dal, grind into a smooth batter, and ferment overnight.",
        "Steam the batter in idli molds until cooked.",
        "Cook toor dal with vegetables. Sauté mustard seeds, curry leaves, and asafoetida.",
        "Add cooked dal and vegetables, tamarind extract, and sambar powder.",
        "Boil until the sambar thickens. Serve idli with hot sambar and coconut chutney."
      ]
    },
    {
      id: 8,
      title: "Upma",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSE5T7QDt07pFaxgRkgfPVXg7sYJtguyIog&s",
      description: "A savory semolina porridge cooked with vegetables and spices, a quick and nutritious breakfast.",
      category: "Breakfast",
      ingredients: [
        "Semolina (Rava)", "Onions", "Mustard Seeds", "Curry Leaves", "Green Chilies",
        "Ginger", "Vegetables (carrots, peas)", "Oil", "Water", "Salt"
      ],
      steps: [
        "Roast semolina until light golden brown.",
        "Sauté mustard seeds, curry leaves, green chilies, and ginger.",
        "Add onions and vegetables, cook until soft.",
        "Pour water, bring to a boil, and add roasted semolina slowly, stirring continuously.",
        "Cook until the upma thickens. Serve hot."
      ]
    },
    {
      id: 9,
      title: "Jowar Roti",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WT3wqPof7gUfD1ORQ7FkOreE0CMkT7ITSg&s",
      description: "A traditional gluten-free flatbread made from jowar (sorghum) flour, popular in Maharashtra and Karnataka.",
      category: "Indian Flatbreads",
      ingredients: [
        "Jowar Flour", "Hot Water", "Salt"
      ],
      steps: [
        "Boil water and mix it with jowar flour to form a soft dough.",
        "Take a portion of dough and flatten it into a round shape using hands or a rolling pin.",
        "Cook on a hot tava, flipping and pressing gently until both sides are cooked well.",
        "Serve hot with curry or chutney."
      ]
    },
    {
      id: 10,
      title: "Bajra Roti",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTd7Akyqx-94g40aRse9gFHxjLVJ90fXWXA&s",
      description: "A hearty, gluten-free flatbread made from pearl millet flour, commonly eaten in Rajasthan and Gujarat.",
      category: "Indian Flatbreads",
      ingredients: [
        "Bajra Flour", "Warm Water", "Salt"
      ],
      steps: [
        "Knead bajra flour with warm water to make a soft dough.",
        "Take small portions and flatten them into discs using hands or a rolling pin.",
        "Cook on a hot tava, flipping until both sides are golden brown.",
        "Serve hot with ghee, dal, or jaggery."
      ]
    },
    {
      id: 11,
      title: "Wheat Roti",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsISRsjrSLK5pArQW4KQRxV0ujVs6YDY6XYg&s",
      description: "A soft and versatile whole wheat flatbread, a staple in Indian households.",
      category: "Indian Flatbreads",
      ingredients: [
        "Whole Wheat Flour", "Water", "Salt", "Ghee (optional)"
      ],
      steps: [
        "Mix wheat flour, salt, and water to make a smooth dough.",
        "Divide the dough into small balls and roll them into thin circles.",
        "Cook on a hot tava, flipping until both sides puff up and develop brown spots.",
        "Brush with ghee and serve hot."
      ]
    },
    {
      id: 12,
      title: "Margherita Pizza",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObNksoK3Cl5hzm-eE4SR11qGVBNGQibUQYA&s",
      description: "A classic Italian pizza topped with tomato sauce, fresh mozzarella, and basil.",
      category: "Fast & Comfort Foods",
      ingredients: [
        "Pizza Dough", "Tomato Sauce", "Fresh Mozzarella", "Basil", "Olive Oil"
      ],
      steps: [
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with fresh mozzarella slices and basil leaves.",
        "Bake in a preheated oven at 220°C (425°F) until crust is golden brown.",
        "Drizzle with olive oil and serve hot."
      ]
    },
    {
      id: 13,
      title: "Creamy Alfredo Pasta",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGGZs8VnVeUQg9JiQLO1z4aqtMguwbzuH4Q&s",
      description: "A rich and creamy pasta dish made with Alfredo sauce and Parmesan cheese.",
      category: "Fast & Comfort Foods",
      ingredients: [
        "Pasta (Fettuccine or Penne)", "Butter", "Heavy Cream", "Parmesan Cheese", "Garlic", "Salt", "Black Pepper"
      ],
      steps: [
        "Boil pasta until al dente and drain.",
        "In a pan, melt butter and sauté garlic, then add cream and cheese.",
        "Stir in cooked pasta and mix well.",
        "Season with salt and pepper, and serve hot."
      ]
    },
  
    // Italian Cuisines
    {
      id: 14,
      title: "Lasagna",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBUb4x6pZL3dZALvw-ep6x5aO8ei5urqH4g&s",
      description: "A layered Italian pasta dish with rich meat sauce, béchamel, and cheese.",
      category: "Italian Cuisines",
      ingredients: [
        "Lasagna Noodles", "Ground Beef", "Tomato Sauce", "Ricotta Cheese", "Mozzarella Cheese", "Parmesan Cheese", "Garlic", "Onions", "Olive Oil"
      ],
      steps: [
        "Cook lasagna noodles according to package instructions.",
        "Prepare meat sauce by sautéing garlic, onions, and ground beef, then adding tomato sauce.",
        "Layer noodles, meat sauce, and cheese in a baking dish.",
        "Repeat layers and bake at 180°C (350°F) until golden brown.",
        "Let it cool slightly and serve hot."
      ]
    },
    {
      id: 15,
      title: "Penne Arrabbiata",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4N_ndPcYA66OCincJodHsx0e6T1ougQlHA&s",
      description: "A spicy Italian pasta dish made with tomato sauce and red chili flakes.",
      category: "Italian Cuisines",
      ingredients: [
        "Penne Pasta", "Olive Oil", "Garlic", "Red Chili Flakes", "Tomato Sauce", "Parmesan Cheese", "Salt", "Black Pepper"
      ],
      steps: [
        "Boil penne pasta until al dente and drain.",
        "Sauté garlic and red chili flakes in olive oil.",
        "Add tomato sauce, season with salt and pepper, and let it simmer.",
        "Toss in the cooked pasta and mix well.",
        "Garnish with Parmesan cheese and serve hot."
      ]
    }
  ];
  
  export default recipes;
  