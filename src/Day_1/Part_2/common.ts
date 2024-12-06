import { getLists } from "..";

export const getSimilarityScore = (myInput: string) => {
  const { list1, list2 } = getLists(myInput);

  const list2Map = new Map<number, number>();

  list2.forEach((item) => list2Map.set(item, (list2Map.get(item) || 0) + 1));

  const numberArray = list1.map(
    (element1) => (list2Map.get(element1) || 0) * element1
  );

  return numberArray.reduce((acc, currentValue) => acc + currentValue, 0);
};
