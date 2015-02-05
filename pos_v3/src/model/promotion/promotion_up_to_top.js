function PromotionUpToTop(name, top, saving) {
    this.name = name;
    this.top = top;
    this.saving = saving;
}

PromotionUpToTop.brands = function() {
    return [
        new PromotionUpToTop('康师傅', 100, 2)
    ];
};

PromotionUpToTop.items = function() {
    return [
        new PromotionUpToTop('可口可乐350ml', 0.95)
    ];
};

module.exports = PromotionUpToTop;