function containsDuplicate(nums: number[]): boolean {
    const list: Set<number> = new Set();
    for (const num of nums) {
        if (list.has(num)) {
            return true;
        }
        list.add(num);
    }
    return false
};