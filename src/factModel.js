class FactModel {
    constructor(fact, index) {
      this.fact = fact;
      this.number = index + 1;
    }

    getFact() {
        if(this.fact === null || this.fact === undefined)
            return "MISSING DATA";
        return this.fact.fact;
    }

    getNumber() {
        if(this.number < 0) {
            return "WRONG DATA";
        }
        return this.number;
    }
}

export default FactModel