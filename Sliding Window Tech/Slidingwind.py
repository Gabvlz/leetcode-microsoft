def length_of_longest_substring(s):
    unique_chars = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in unique_chars:
            unique_chars.remove(s[left])
            left += 1
        
        unique_chars.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length