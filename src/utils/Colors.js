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