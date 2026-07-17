export function getRandomItem<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Array is empty");
  }

  const index = Math.floor(Math.random() * items.length);

  return items[index];
}

export function getRandomUniqueItems<T>(items: T[], count: number): T[] {
  if (count > items.length) {
    throw new Error("Count cannot be greater than array length");
  }

  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}
