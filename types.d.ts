declare global {
  type Drink = {
    id: string;
    name: string;
    description: string;
    category: string;
    ingredients: string[];
    instructions: string;
  };

  type UpdateDrinkDTO = {
    name?: string;
    description?: string;
    category?: string;
    ingredients?: string[];
    instructions?: string;
    imageUrl?: string;
  };

  type PaginatedResponse<T> = {
    data: T[];
    total: number;
    page: number;
    limit: number;
  };

  type ApiResponse<T> = {
    data: T;
    error: string | null;
  };
}

export {};
