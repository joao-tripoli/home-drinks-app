'use client';

import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import UpdateDrinkForm from './update-drink-form';

type Props = {
  drink: Drink;
  onUpdate?: (data: UpdateDrinkDTO) => void;
};

const DrinkCard = ({ drink, onUpdate }: Props) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleUpdate = (data: UpdateDrinkDTO) => {
    onUpdate?.(data);
    setIsEditDialogOpen(false);
  };

  return (
    <>
      <div className="rounded-md border p-4 bg-card flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold">{drink.name}</h2>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditDialogOpen(true)}
            className="h-8 w-8 p-0"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">{drink.description}</p>

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-disc list-inside">
          {drink.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Instructions</h3>
        <p className="text-sm text-muted-foreground">{drink.instructions}</p>
      </div>

      <UpdateDrinkForm
        drink={drink}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSubmit={handleUpdate}
      />
    </>
  );
};

export default DrinkCard;
