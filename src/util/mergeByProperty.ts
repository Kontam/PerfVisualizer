export function mergeByProperty<
  T1 extends Array<Record<string, unknown>>,
  T2 extends Array<Record<string, unknown>>
>(array1: T1, array2: T2, key: string) {
  return array1.reduce<Array<T1[number] & T2[number]>>((acc, cur) => {
    const sameId = array2.find((data) => data[key] === cur[key]);
    acc.push({
      ...cur,
      ...sameId,
    });
    return acc;
  }, []);
}
