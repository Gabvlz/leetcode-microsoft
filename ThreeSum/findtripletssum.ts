function threeSum(nums: number[]): number[][] {
    const result: number[][] = []; //Array vacío de almacenamiento tríos que cumplan condiciones siguientes
    nums.sort((a, b) => a - b);
  
    for (let first = 0; first < nums.length - 2; first++) {
      // Verifica si existen duplicados para first, en las siguientes líneas se aclara que si puede repetir first pero no los trios
      if (first > 0 && nums[first] === nums[first - 1]) {
        continue;
      }
  
      let left = first + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const total = nums[first] + nums[left] + nums[right];
  
        if (total === 0) {
          result.push([nums[first], nums[left], nums[right]]);
  
          // Verifica si existen duplicados, de existir avanza al siguiente
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
  
          left++;
          right--;
        } else if (total < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  
    return result;
  }
  