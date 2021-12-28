/**
 * JSON.stringify() doesn't handle methods inside an object.
 * 
 */
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'Abcd'
  }
};

const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj);
// {a: "a", b: "b", c: {d: "d", e: "e"}}
