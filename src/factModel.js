class FactModel {
    constructor(fact, index) {
      this.fact = fact;
      this.number = index + 1;
    }

    getFact() {
        return this.fact;
    }

    getNumber() {
        return this.number;
    }
}

export default FactModel