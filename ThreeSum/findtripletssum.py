def three_sum(nums):
    result = [] #Array vacío de almacenamiento tríos que cumplan condiciones siguientes
    nums.sort()

    for i in range(len(nums) - 2):
        # Verifica si existen duplicados para first, en las siguientes líneas se aclara que si puede repetir first pero no los trios
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, len(nums) - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if total == 0:
                result.append([nums[i], nums[left], nums[right]])

                # Verifica si existen duplicados, de existir avanza al siguiente
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1

    return result
