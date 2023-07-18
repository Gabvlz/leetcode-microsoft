class Solution(object):
    def maxProfit(self, prices):
        if len(prices) == 0: return 0
        else:
            max_profit = 0
            min_price = prices[0]
            for sell in range(len(prices)):
                    min_price=min(min_price,prices[sell])
                    max_profit = max(prices[sell] - min_price, max_profit)
            return max_profit