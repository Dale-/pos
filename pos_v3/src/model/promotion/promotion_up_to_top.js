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
        new PromotionUpToTop('云山荔枝', 100, 5)
    ];
};

module.exports = PromotionUpToTop;