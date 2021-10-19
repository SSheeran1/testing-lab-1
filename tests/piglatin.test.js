const { translate } = require("../src/piglatin.js");

describe("translate function", () => {
  test("word that starts with the vowel a", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with the vowel e", () => {
    const result = translate("elephant");
    expect(result).toBe("elephantway");
  });
  test("word that starts with the vowel i", () => {
    const result = translate("inch");
    expect(result).toBe("inchway");
  });
  test("word that starts with the vowel o", () => {
    const result = translate("orange");
    expect(result).toBe("orangeway");
  });
  test("word that starts with the vowel u", () => {
    const result = translate("uruguay");
    expect(result).toBe("uruguayway");
  });
  test("word that starts with capital a", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with capital e", () => {
    const result = translate("Elephant");
    expect(result).toBe("elephantway");
  });
  test("word that starts with capital i", () => {
    const result = translate("Inch");
    expect(result).toBe("inchway");
  });
  test("word that starts with capital o", () => {
    const result = translate("Orange");
    expect(result).toBe("orangeway");
  });
  test("word that starts with capital u", () => {
    const result = translate("Uruguay");
    expect(result).toBe("uruguayway");
  });
  test("word that starts with consonant + the letter a", () => {
    const result = translate("band");
    expect(result).toBe("andbay");
  });
  test("word that starts with consonant + the letter e", () => {
    const result = translate("fender");
    expect(result).toBe("enderfay");
  });
  test("word that starts with consonant + the letter g", () => {
    const result = translate("giraffe");
    expect(result).toBe("iraffegay");
  });
  test("word that starts with two consonants + the letter a", () => {
    const result = translate("brake");
    expect(result).toBe("akebray");
  });
  test("word that starts with two consonants + the letter e", () => {
    const result = translate("break");
    expect(result).toBe("eakbray");
  });
  test("word that starts with more consonants + the letter o", () => {
    const result = translate("strong");
    expect(result).toBe("ongstray");
  });
  test("word that starts with more consonants + the letter e", () => {
    const result = translate("thrice");
    expect(result).toBe("icethray");
  });
  test("word that starts with more consonants + the letter e", () => {
    const result = translate("system");
    expect(result).toBe("emsystay");
  });
});
