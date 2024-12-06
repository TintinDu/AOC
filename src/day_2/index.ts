const getLists = (myInput: string) => {
  const tata = myInput
    .split("\n")
    .map((string) => string.split(" ").map((v) => +v));

  return tata;
};

const isValid = (list: number[]) => {
  const [first, second] = list;
  const asc = first <= second;

  return list.every((value, index) => {
    const nextValue = list[index + 1];

    if (!nextValue) {
      return true;
    }

    if (asc && nextValue <= value) {
      return false;
    }

    if (!asc && nextValue >= value) {
      return false;
    }

    const gap = Math.abs(nextValue - value);

    if (gap < 1 || gap > 3) {
      return false;
    }

    return true;
  });
};

export const partOne = (input: string): number =>
  getLists(input).filter(isValid).length;

export const partTwo = (input: string): number => {
  const lists = getLists(input);
  const invalids = lists
    .filter((list) => !isValid(list))
    .map((list, index) => {
      return list.map((_, index) => {
        const toto = [...list];
        toto.splice(index, 1);
        return toto;
      });
    });

  const newValids = invalids.filter((invalidWithoutError) =>
    invalidWithoutError.some(isValid)
  );

  const valids = lists.filter(isValid).length + newValids.length;

  return valids;
};
