class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t): #Verificamos largo en primera instancia y confirmamos primera condición del Anagrama, si son distintos retorna False
            return False
        for i in set(s): #Iteramos en lista s
            if s.count(i) != t.count(i): # Si son distintas las comparaciones de cada contador s y t retorna False, de los contrario corresponde a un Anagrama y retorna True
                return False
        return True