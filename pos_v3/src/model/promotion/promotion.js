function Promotion(name, rate) {
    this.name = name;
    this.rate = rate;
}

Promotion.brands = function() {
    return [
            new Promotion('可口可乐', 0.9)
    ];
};

Promotion.items = function() {
    return [
        new Promotion('可口可乐350ml', 0.95)
    ];
};