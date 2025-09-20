import fetchDrinks from '@/services/fetchDrinks';
import DrinkCard from './components/drink-card';

const Drinks = async () => {
  const { data: drinks } = await fetchDrinks();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default Drinks;
