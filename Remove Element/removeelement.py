from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        right = 0
        left = 0

        while right < len(nums):
        
            if nums[right] == val:
                right += 1
            else:
                nums[left] = nums[right]
                left += 1
                right += 1
        return left