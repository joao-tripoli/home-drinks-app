'use server';

import fetcher from '@/lib/fetcher';

export default async function fetchDrinks() {
  return fetcher<PaginatedResponse<Drink>>('drinks');
}
