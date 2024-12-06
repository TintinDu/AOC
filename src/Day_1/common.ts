export const getSum = (myInput: string) => {
  const { list1, list2 } = myInput
    .split("\n")
    .map((string) => string.split("   "))
    .reduce(
      (acc: { list1: number[]; list2: number[] }, currentValue) => {
        const [lol, lal] = currentValue;
        acc.list1.push(+lol);
        acc.list2.push(+lal);
        return acc;
      },
      { list1: [], list2: [] }
    );

  list1.sort();
  list2.sort();

  return list1
    .map((element, index) => Math.abs(element - list2[index]))
    .reduce((acc, currentValue) => acc + currentValue, 0);
};
