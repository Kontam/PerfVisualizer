import { mergeByProperty } from '../mergeByProperty';
describe('mergeByProperty', () => {
  describe('jsonファイルが存在する時', () => {
    let result;
    beforeEach(() => {
      const array1 = [
        { id: '1', name: 'kontam' },
        { id: '2', name: 'kontam' },
      ];
      const array2 = [
        { id: '1', email: 'email' },
        { id: '2', email: 'email' },
      ];
      result = mergeByProperty(array1, array2, 'id');
    });
    test('lengthがinputの配列と同じ', () => {
      expect(result.length).toBe(2);
    });
    test('第１引数のプロパティを持つ', () => {
      expect(result[0]).toHaveProperty('name');
      expect(result[1]).toHaveProperty('name');
    });
    test('第２引数のプロパティを持つ', () => {
      expect(result[0]).toHaveProperty('email');
      expect(result[1]).toHaveProperty('email');
    });
  });
});
