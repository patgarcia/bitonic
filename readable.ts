const getBitonic = (size: number): number[] => {
  if (size <= 3) return [0, 2, 1]; // Base case for small sizes

  const arr = [...Array(size).keys()]; // Create an array [0, 1, 2, ..., size - 1]
  const splitIndex = Math.floor(Math.random() * (size - 1)) || 1; // Random split

  // Rotate and sort the first part in descending order
  const rotated = arr.splice(0, splitIndex).sort((a, b) => b - a);
  arr.push(...rotated); // Append rotated part to the original

  return arr; // Return the final bitonic array
};
