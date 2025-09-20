// No import needed for Drink type - it's globally available
export default function LibraryPage() {
  // Example of using the global Drink type
  const exampleDrink: Drink = {
    id: '1',
    name: 'Example Drink',
    description: 'A sample drink',
    category: 'Cocktail',
    ingredients: ['ingredient1', 'ingredient2'],
    instructions: 'Mix ingredients together',
  };

  return (
    <div>
      <h1>Library</h1>
      <p>Example drink: {exampleDrink.name}</p>
    </div>
  );
}
