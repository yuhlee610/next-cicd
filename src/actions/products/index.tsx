'use server';

const baseUrl = 'https://dummyjson.com/products';

export async function query(param: string) {
  const response = await fetch(`${baseUrl}/search?q=${param}`);
  const data = await response.json();
  return data.products;
}
