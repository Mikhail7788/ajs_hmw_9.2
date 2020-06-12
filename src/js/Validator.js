export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const onlyLatin = /[^\w_-]/.test(this.name);
    const nomoreThree = /[0-9]{4,}/.test(this.name);
    const dontSymbolsBefore = /^[^0-9_-]/.test(this.name);
    const dontSymbolsAfter = /[^0-9_-]$/.test(this.name);
    if (!onlyLatin && !nomoreThree && dontSymbolsBefore && dontSymbolsAfter) {
      return 'validation success';
    }
    return 'validation failed';
  }
}