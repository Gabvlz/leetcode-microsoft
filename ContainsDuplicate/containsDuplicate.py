class Solution(object):
    def containsDuplicate(self, nums):
        list = set()
        for a in nums:
            if a in list:
                return True
            else:
                list.add(a)
        return False