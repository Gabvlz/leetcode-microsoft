function maxProfit(prices: number[]): number {
    if (!prices || prices.length === 1) {
        return 0;
    }
    let min = prices [0];
    let max = 0;
    for (const price of prices) {
        min = Math.min(min, price);
        const potentialPrices = price - min;
        max = Math.max (max, potentialPrices);
    }
    return max;
}