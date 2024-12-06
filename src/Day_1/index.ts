export const getLists = (myInput: string) => {
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

  return { list1, list2 };
};
