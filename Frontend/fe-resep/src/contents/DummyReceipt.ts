export interface Recipe {
    recipe_name: string;
    calories: string;
    picture: string;
    prep_time: string;
    cook_time: string;
    ingredients: string;
    instructions: string;
    description: string; // Menambahkan properti 'description'
}

export const recipes: Recipe[] =  [
    {
      recipe_name: "Quinoa Salad",
      calories: "247 calories",
      picture: "https://www.eatingbirdfood.com/wp-content/uploads/2024/04/easy-quinoa-salad-hero-cropped-1024x1536.jpg",
      prep_time: "15 mins",
      cook_time: "15 mins",
      ingredients: "50 g quinoa,\n60 g cherry tomatoes (halved),\n50 g cucumber (diced),\n20 g red onion (finely chopped),\n30 g feta cheese,\n7.5 g olive oil,\n7.5 g lemon juice",
      instructions: "Rinse quinoa and cook according to package instructions.\nMix cooked quinoa with chopped veggies and feta.\nDrizzle with olive oil and lemon juice.\nToss to combine.",
      description: "A light and refreshing salad that combines the nutty flavor of quinoa with the crispness of fresh vegetables and the tanginess of feta cheese. Perfect for a healthy lunch or side dish."
    },
    {
      recipe_name: "Grilled Chicken",
      calories: "260 calories",
      picture: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_750,h_563/k%2Farchive%2Fffe021a719de82cec148a415c900da1e8e5579e1",
      prep_time: "10 mins",
      cook_time: "20 mins",
      ingredients: "170 g chicken breast,\n7.5 g olive oil,\n1 clove garlic (about 3 g, minced),\n7.5 g rosemary (chopped),\nSalt and pepper to taste",
      instructions: "Rub chicken breast with olive oil.\nMix minced garlic, rosemary, salt, and pepper, then rub over the chicken.\nGrill for 6-7 minutes per side until the internal temperature reaches 74°C (165°F).\nLet rest before serving.",
      description: "A simple yet flavorful grilled chicken recipe, perfect for a quick and healthy dinner. The garlic and rosemary add a delicious aroma that pairs well with the tender, juicy chicken."
    },
    {
      recipe_name: "Veggie Stir-Fry",
      calories: "148 calories",
      picture: "https://www.wholesomeyum.com/wp-content/uploads/2020/11/wholesomeyum-Stir-Fry-Vegetables-15.jpg",
      prep_time: "10 mins",
      cook_time: "10 mins",
      ingredients: "1/2 bell pepper (about 50 g, sliced),\n100 g broccoli florets,\n1 medium carrot (about 60 g, sliced),\n7.5 g soy sauce,\n1/2 clove garlic (about 1.5 g, minced),\n1/2 tsp ginger (about 1 g, minced),\n7.5 g oil",
      instructions: "Heat oil in a pan over medium-high heat.\nAdd minced garlic and ginger, sauté for 1 minute.\nAdd vegetables and stir-fry for 5-7 minutes.\nAdd soy sauce and stir to coat. Serve hot.",
      description: "A quick and easy stir-fry that is packed with colorful vegetables. This dish is perfect for a light, low-calorie meal that is both nutritious and satisfying."
    },
    {
      recipe_name: "Greek Yogurt Parfait",
      calories: "328 calories",
      picture: "https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-with-fruit-600x600.jpg",
      prep_time: "5 mins",
      cook_time: "0 mins",
      ingredients: "125 g Greek yogurt,\n15 g honey,\n30 g granola,\n30 g mixed berries",
      instructions: "Spoon Greek yogurt into a bowl or glass.\nDrizzle with honey.\nAdd granola and berries on top.",
      description: "A delightful and healthy breakfast option or snack, this Greek yogurt parfait combines creamy yogurt with sweet honey, crunchy granola, and fresh berries for a balanced treat."
    },
    {
      recipe_name: "Lentil Soup",
      calories: "227 calories",
      picture: "https://www.allrecipes.com/thmb/Ip_nGTyoniIaLxnUD6rPMrIe1hE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/13978-lentil-soup-DDMFS-4x3-edfa47fc6b234e6b8add24d44c036d43.jpg",
      prep_time: "10 mins",
      cook_time: "30 mins",
      ingredients: "50 g lentils,\n30 g diced carrots,\n30 g diced celery,\n30 g diced onion,\n1/2 clove garlic (about 1.5 g, minced),\n240 ml vegetable broth,\n60 g diced tomatoes",
      instructions: "Sauté carrots, celery, and onion with minced garlic in olive oil for 5 minutes.\nAdd lentils, vegetable broth, and tomatoes.\nSimmer for 25-30 minutes until lentils are tender.\nSeason with salt and pepper.",
      description: "A hearty and nutritious soup that is packed with protein-rich lentils and fresh vegetables. This comforting dish is perfect for a chilly day and easy to make."
    },
    {
      recipe_name: "Sweet Potato Fries",
      calories: "251 calories",
      picture: "https://www.dinneratthezoo.com/wp-content/uploads/2019/07/sweet-potato-fries-5.jpg",
      prep_time: "10 mins",
      cook_time: "30 mins",
      ingredients: "200 g sweet potato,\n7.5 g olive oil,\n1/4 tsp paprika (about 0.5 g),\n1/4 tsp garlic powder (about 0.5 g)",
      instructions: "Preheat oven to 220°C (425°F).\nPeel and cut sweet potato into thin strips.\nToss with olive oil, paprika, and garlic powder.\nBake for 25-30 minutes, flipping halfway through.",
      description: "Crispy on the outside and soft on the inside, these sweet potato fries are a healthier alternative to traditional fries. Perfect as a side dish or a snack."
    },
    {
      recipe_name: "Chia Seed Pudding",
      calories: "212 calories",
      picture: "https://www.eatingwell.com/thmb/m01_fIHk3lfzRWismyCAgWyEoHM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-RM-chia-seed-pudding-hero-0359-5d8095204fa84a0a944c937dd11d1550.jpg",
      prep_time: "10 mins",
      cook_time: "0 mins",
      ingredients: "15 g chia seeds,\n120 ml almond milk,\n7.5 g honey,\n1/4 tsp vanilla extract (about 1 g)",
      instructions: "Mix chia seeds with almond milk, honey, and vanilla extract.\nStir well and let sit for 5 minutes, then stir again.\nRefrigerate for at least 2 hours or overnight.",
      description: "A nutritious and easy-to-make dessert or snack that is rich in omega-3 fatty acids. This chia seed pudding is creamy, delicious, and can be customized with your favorite toppings."
    },
    {
      recipe_name: "Baked Salmon",
      calories: "448 calories",
      picture: "https://cafedelites.com/wp-content/uploads/2018/03/Sheet-Pan-Salmon-1.jpg",
      prep_time: "5 mins",
      cook_time: "15 mins",
      ingredients: "170 g salmon fillet,\n7.5 g olive oil,\n1/2 lemon (juiced, about 30 ml),\n7.5 g dill,\nSalt and pepper to taste",
      instructions: "Preheat oven to 190°C (375°F).\nPlace salmon on a baking sheet.\nBrush with olive oil and squeeze lemon juice over the fillet.\nSprinkle with dill, salt, and pepper.\nBake for 15-20 minutes until the fish flakes easily.",
      description: "A healthy and flavorful baked salmon recipe that is simple to prepare. The lemon and dill add a fresh, zesty flavor that complements the rich, tender salmon."
    },
    {
      recipe_name: "Stuffed Bell Peppers",
      calories: "338 calories",
      picture: "https://www.budgetbytes.com/wp-content/uploads/2023/08/Stuffed-Bell-Peppers-V2-800x1067.jpg",
      prep_time: "20 mins",
      cook_time: "25 mins",
      ingredients: "1 bell pepper (about 150 g),\n50 g cooked quinoa,\n50 g black beans (rinsed),\n50 g corn,\n50 g salsa,\n15 g shredded cheese",
      instructions: "Preheat oven to 190°C (375°F).\nCut the top off the bell pepper and remove seeds.\nMix cooked quinoa, black beans, corn, and salsa.\nStuff the mixture into the bell pepper and top with shredded cheese.\nBake for 25 minutes until the cheese is melted and the pepper is tender.",
      description: "These stuffed bell peppers are a colorful and nutritious meal that is packed with protein and fiber. They are easy to make and can be customized with your favorite ingredients."
    }
];
