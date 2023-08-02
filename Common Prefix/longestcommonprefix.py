class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return "" #Condición solicitada en caso de no ser un prefijo o string válido
        k = strs[0]
        for i in range(1, len(k)): #rango inicia en la posición 1, no debemos comparar el primer string con sigo mismo
            while strs[i].find(k) !=0: 
                k = k[:-1] # Slice que regresa al carñacter anterior válido y cumplir con prefijo de busqueda
                if not k:
                    return ""
        return k