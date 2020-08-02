export default class ErrorRepository {
  constructor() {
    this.errorStorage = new Map();
  }

  add(code, text) {
    if (typeof code === 'number' && typeof text === 'string') {
      this.errorStorage.set(code, text);
    } else {
      throw Error('Error not added');
    }
  }

  translate(code) {
    return (this.errorStorage.has(code)) ? this.errorStorage.get(code) : 'Unknown error';
  }
}
