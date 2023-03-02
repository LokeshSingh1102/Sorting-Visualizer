export const mergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxillaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxillaryArray, animations) {
    if (startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(mainArray, startIdx, midIdx, auxillaryArray, animations)
    mergeSortHelper(mainArray, midIdx + 1, endIdx, auxillaryArray, animations)
    doMerge(mainArray, startIdx, midIdx, endIdx, auxillaryArray, animations)
}
function doMerge(mainArray, startIdx, midIdx, endIdx, auxillaryArray, animations) {
    let i = startIdx
    let j = midIdx + 1
    let k = startIdx
    while (i <= midIdx && j <= endIdx) {
        animations.push([i, j])
        animations.push([i, j])
        if (auxillaryArray[i] <= auxillaryArray[j]) {
            animations.push([k, auxillaryArray[i]])
            mainArray[k++] = auxillaryArray[i++]
        }
        else {
            animations.push([k, auxillaryArray[j]])
            mainArray[k++] = auxillaryArray[j++]
        }
    }
    while (i <= midIdx) {
        animations.push([i, i])
        animations.push([i, i])

        animations.push([k, auxillaryArray[i++]])
        mainArray[k++] = auxillaryArray[i++]
    }

    while (j <= endIdx) {
        animations.push([j, j])
        animations.push([j, j])

        animations.push([k, auxillaryArray[j]])
        mainArray[k++] = auxillaryArray[j++]
    }

}