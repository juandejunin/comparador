function sonIguales(obj1, obj2) {
    /*validar si los objetos son arreglos, para eso utilizo la funcion isArray
        que es incluida en el objeto Array, en caso que lo sean recorrere cada arreglo 
        y comparo los elementos uno por uno
    */
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        for (let i = 0; i <= obj1.length; i++) {
            if (!sonIguales(obj1[i], obj2[i])) {
                return false
            }

        }
        return true
    }

    //En caso que no son array validar que sean objetos
    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
        const keys  = Object.keys(obj1);
        for(const key of keys){
            if(!sonIguales(obj1[key], obj2[key])){
                return false
            }
        }
        return true
    }

    //en caso que no sean array ni objeto se comparan como valores primitivos
    return obj1 === obj2
}

console.log(sonIguales(2, 2));
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(sonIguales([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABC' } }]));
