export function swap<T>(
  baseArray: T[],
  inxFirst: number,
  inxSecond: number
): T[] {
  const array = [...baseArray];
  if (inxSecond == -1) {
    const secondPart = array.slice(1);
    secondPart.push(array[inxFirst]);
    
    return secondPart;
  }
  if (inxSecond == array.length) {
    const secondPart = array.slice(0, -1);
    secondPart.unshift(array[inxFirst]);

    return secondPart;
  }
  const dump = array[inxFirst];
  array[inxFirst] = array[inxSecond];
  array[inxSecond] = dump;

  return array;
}
