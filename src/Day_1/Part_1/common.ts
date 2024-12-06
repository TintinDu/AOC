import { getLists } from "..";

export const getSum = (myInput: string) => {
  const { list1, list2 } = getLists(myInput);

  list1.sort();
  list2.sort();

  return list1
    .map((element, index) => Math.abs(element - list2[index]))
    .reduce((acc, currentValue) => acc + currentValue, 0);
};
