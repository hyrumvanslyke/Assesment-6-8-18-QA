const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  let sampleArr = ["Hello", "World"]
    test("Be an array", () => { 
        expect(shuffle(sampleArr) instanceof Array).toEqual(true)   
      });

    test("Be same length as input", () => { 
    expect(shuffle(sampleArr).length).toEqual(sampleArr.length)   
    });
});
