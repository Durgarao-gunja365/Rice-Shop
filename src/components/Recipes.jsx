import React from 'react';

export default function Recipes() {
  // Example recipe data
  const recipes = [
    {
      id: 1,
      title: 'Spicy Chicken Curry',
      description: 'A fiery and flavorful chicken curry packed with spices.',
      image: 'https://via.placeholder.com/400x250',
      category: 'Main Course',
    },
    {
      id: 2,
      title: 'Vegetable Stir Fry',
      description: 'A healthy and crunchy vegetable stir fry with soy sauce.',
      image: 'https://via.placeholder.com/400x250',
      category: 'Appetizer',
    },
    {
      id: 3,
      title: 'Chocolate Cake',
      description: 'A rich and moist chocolate cake topped with ganache.',
      image: 'https://via.placeholder.com/400x250',
      category: 'Dessert',
    },
    // Add more recipes here
  ];

  return (
    <section className="pt-28 pb-20 px-6 min-h-screen bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-yellow-700 dark:text-yellow-400 text-center mb-10">Our Delicious Recipes</h1>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-4 border-yellow-300 dark:border-yellow-600 transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-2">{recipe.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{recipe.description}</p>
              <span className="bg-yellow-100 dark:bg-gray-700 text-yellow-600 dark:text-yellow-400 px-4 py-1 rounded-full text-sm">{recipe.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
