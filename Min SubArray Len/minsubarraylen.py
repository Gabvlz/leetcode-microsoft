class Solution:
    def minSubArrayLen(self, target: int, nums: list[int]) -> int:

        if sum(nums) < target: return 0

        current_sum = 0
        l = 0
        ans = len(nums)
        
        for right,val in enumerate(nums):
            current_sum += val
            
            while current_sum >= target:
                ans = min(ans, right - l + 1)
                current_sum -= nums[l]
                l += 1
                
        return ans