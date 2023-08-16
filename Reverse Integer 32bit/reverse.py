import math
class Solution:
    def reverse(self, x: int) -> int:
        max_int = 2 ** 31-1
        min_int = -2 ** 31
        numreverse = 0
        while x != 0:
            if numreverse > max_int / 10 or numreverse < min_int / 10:
                return 0
            target = x % 10 if x > 0 else x % -10
            numreverse = numreverse * 10 + target
            x = math.trunc(x/10)
        return numreverse