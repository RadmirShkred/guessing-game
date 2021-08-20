class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.number = 0;
    }

    setRange(start, end) {
        this.start = start;
        this.end = end;
    }

    guess() {
        this.number = Math.round((this.start + this.end) / 2);
        return this.number;
    }

    lower() {
        this.end = this.number;
    }

    greater() {
        this.start = this.number;
    }
}

module.exports = GuessingGame;
