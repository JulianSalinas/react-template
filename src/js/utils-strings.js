export function capitalize(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

export function formatTitle(title){
    const truncateAt = 200;
    const length = title.length;
    const truncated = length <= truncateAt ? title : title.substring(0, truncateAt) + "...";
    return capitalize(truncated.toLowerCase());
}