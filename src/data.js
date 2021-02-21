

function data() {

    return {
        "Ingredients":[{
            "Garlic": {
                "Type": "Spice",
                "Variety":"" ,
                "Quantity": 6,
                "Measure": "Unit"
            },
            "Potatoes":{
                "Type": "Vegetable",
                "Variety":"Red" ,
                "Quantity": 12,
                "Measure": "Unit"
            },
            "Salt":{
                "Type": "Spice",
                "Variety":"Coarse Salt",
                "Quantity": 1,
                "Measure": "Kilograms"
            },
        }],
        "Recipes":[
            {
                Name: "Mac and Cheese",
                Ingredients:[
                    "Mac",
                    "Cheese"
                ],
                Recipe: "Put the Mac in the Cheese and ta da",
                Calories: 500,
                Tags: 
                ["Vegetarian", "Lactose", "Pasta", "Lunch or Dinner"],
                Serving: 1,
                Duration: 8,
                Difficulty: "Easy",
                Image:"https://pinchofyum.com/wp-content/uploads/2014/02/healthy-mac-and-cheese-51.jpg"
            },
            {
                Name: "Meatballs and Rice",
                Ingredients:[
                    "Meatballs",
                    "Rice"
                ],
                Recipe: "Do something with the meatballs and rice",
                Calories: 700,
                Tags:
                ["Meat", "Lunch or Dinner"],
                Serving: 4,
                Duration: 65,
                Difficulty: "Medium",
                Image:"https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/2335/letterbox_Saucy-meatballs-with-rice-593.jpg"
            },
            {
                Name: "Pancakes",
                Ingredients:[
                    "Flour",
                    "Butter",
                    "Eggs",
                    "Milk"
                ],
                Recipe: "Put it all together and hope for the best",
                Calories: 200,
                Tags:
                ["Breakfast ,Brunch or Lunch", "Vegetarian"],
                Serving: 2,
                Duration: 15,
                Difficulty: "Medium",
                Image:"https://images-gmi-pmc.edge-generalmills.com/df109202-f5dd-45a1-99b4-f10939afd509.jpg"
            }
        ]
    }
}

export default data;