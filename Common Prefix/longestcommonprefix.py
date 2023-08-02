class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        best_prefix = strs[0]
        for index,s in enumerate(strs):
            print(index,s)
            counter = 0
            while counter < len(best_prefix) and counter < len(s) and best_prefix[counter] == s[counter]:
                counter += 1
            best_prefix = best_prefix[:counter]
        return best_prefix