/**
 * Gets always the same result for the same element
 * @param key Object to map
 * @returns {number} Result after hash the key
 */
function hashCode(key){
    let hash = 0, i, chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
        chr   = key.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

/**
 * Gets always the same color for the same key
 * @param key Object to map
 * @param colors List of colors
 * @returns {string} Fixed color
 */
export function hashColor(key, colors){
    const value = Math.abs(hashCode(key));
    return colors.length > 0 ? colors[value % colors.length] : 0;
}

export function rgbToHex(color) {
    return color.match(/[0-9]+/g).reduce((a, b) => a+(b|256).toString(16).slice(1), '#');
}

/* Suma el porcentaje indicado a un color (RR, GG o BB) hexadecimal para aclararlo */
const addLight = function(color, amount){
    let cc = parseInt(color,16) + amount;
    let c = (cc > 255) ? 255 : (cc);
    c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
    return c;
};


/* Aclara un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
export const lighten = (color, amount)=> {
    color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
    amount = parseInt((255*amount)/100);
    return `#${addLight(color.substring(0,2), amount)}${addLight(color.substring(2,4), amount)}${addLight(color.substring(4,6), amount)}`;
};

/* Resta el porcentaje indicado a un color (RR, GG o BB) hexadecimal para oscurecerlo */
const subtractLight = function(color, amount){
    let cc = parseInt(color,16) - amount;
    let c = (cc < 0) ? 0 : (cc);
    c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
    return c;
};

/* Oscurece un color hexadecimal de 6 caracteres #RRGGBB segun el porcentaje indicado */
export const darken = (color, amount) =>{
    color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
    amount = parseInt((255*amount)/100);
    return `#${ subtractLight(color.substring(0,2), amount)}${subtractLight(color.substring(2,4), amount)}${subtractLight(color.substring(4,6), amount)}`;
};
