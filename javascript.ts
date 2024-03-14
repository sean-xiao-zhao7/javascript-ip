const input = [12, 212, 5123, 3231, 22, 1231, 51829, 182, 192, 1001];

const QuickSort = (input: number[]): number[] => {
    // trivially sort input less than 2 items
    if (input.length <= 2) {
        return input.sort((a, b) => a - b);
    }

    // pick pivot, rearrange, then recursively sort any input longer than 2
    let pivotIndex = Math.floor(input.length / 2);
    const pivot = input[pivotIndex];

    // move all greater than pivot items behind pivot index
    for (let index = 0; index < pivotIndex; index++) {
        if (input[index] > pivot) {
            input.splice(pivotIndex, 0, input[index]);
            input.splice(index, 1);
            pivotIndex -= 1;
        }
    }

    // move all less than pivot items before pivot index
    for (let index = pivotIndex + 1; index < input.length; index++) {
        if (input[index] < pivot) {
            input.splice(0, 0, input[index]);
            input.splice(index, 1);
            pivotIndex += 1;
        }
    }
    return QuickSort(input.slice(0, pivotIndex)).concat(
        [pivot],
        QuickSort(input.slice(pivotIndex + 1))
    );
};

QuickSort(input);
// console.log(input);
