import {compute} from "./compute";

describe('compute', () => {
  it('should return zero if input is -1', function () {
    const result = compute(-1);

    expect(result).toBe(0);
    expect(result).not.toBe(1);
    expect(result).toBeLessThan(3);
    expect(result).toBeGreaterThan(-1);
  });


  it('should compare two person', function () {
    const firstPerson = {name: 'majid', age: 23};
    const secondPerson = {name: 'majid', age: 23};

    expect(firstPerson).toEqual(secondPerson);
    expect(firstPerson).not.toBe(secondPerson);
  });
})
