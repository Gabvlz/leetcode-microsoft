class Solution(object):
    def removeDuplicates(self, nums):
        if not nums:
            return 0 # Se verifica que la lista nums contenga números, si no es así retorna 0
        k=1 #iniciamos posición 1 de conteo
        for i in range (1,len(nums)):
            if nums[i] != nums[i-1]: # Si el número siguiente es distinto, se suma a la lista k
                nums[k] = nums[i]
                k += 1 
        return k