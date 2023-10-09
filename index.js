const foodData = require('./food.json');
function listAllFoodItems(data) {
    return data.map(item => item.foodname);
  }
  function listFoodItemsByCategory(data, category) {
    return data.filter(item => item.category === category)
               .map(item => item.foodname);
  }
  function listFoodItemsByCalorie(data, condition, value) {
    return data.filter(item => condition === 'above' ? item.calorie > value : item.calorie < value)
               .map(item => item.foodname);
  }
  function listFoodItemsByProteinContent(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens)
               .map(item => item.foodname);
  }
  
console.log(listAllFoodItems(foodData));
console.log(listFoodItemsByCategory(foodData, 'Vegetable'));
console.log(listFoodItemsByCategory(foodData, 'Fruit'));
console.log(listFoodItemsByCategory(foodData, 'Protein'));
console.log(listFoodItemsByCategory(foodData, 'Nuts'));
console.log(listFoodItemsByCategory(foodData, 'Grain'));
console.log(listFoodItemsByCategory(foodData, 'Dairy'));

console.log(listFoodItemsByCalorie(foodData, 'above', 100));
console.log(listFoodItemsByCalorie(foodData, 'below', 100));

console.log(listFoodItemsByProteinContent(foodData));
console.log(listFoodItemsByCarbContent(foodData));  
