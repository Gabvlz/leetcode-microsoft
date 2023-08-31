from typing import List
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix:
            return False
        rows = len(matrix)
        col = len(matrix[0])
        l = 0
        r = rows * col - 1
        while l <= r:
            mid = (l + r) // 2
            num = matrix[mid // col][mid % col]

            if num == target:
                return True
            if num < target:
                l = mid + 1
            else:
                r = mid - 1
        return False