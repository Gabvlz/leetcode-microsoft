function merge(nums1:number[], m:number, nums2:number[], n:number): void {
    let a: number = m-1;
    let b: number = n-1;
    let k: number = m + n - 1;
    while (b >= 0){
        if (a>=0 && nums1[a]>nums2[b]){//si se cumple posición distinta o igual a 0 se evalua array1 en posisicón a, mayor que array2 en posición b
            nums1[k]=nums1[a]//Se asigna el valor entregado en la posición y se decreta el valor en posición a para seguir con la siguiente posición
            a--
        } else {
            nums1[k]=nums2[b]//si no se cumple la condición anterior se aplica else indicando que al no cumplir condición señalada nums2[b] es mayor por lo tanto se aplica a la posición k
            b--
        }
        k--//finalmente se decreta k en todas sus posiciones y ya fusionado se almacena en nums1 y continúa hasta que se hayan insertado todas las posiciones desde nums2
    }
}