const input = [1, 2, 1231, 1231, 22, 1231, 51829, 182, 192, 1001];

const QuickSort = (input: number[]): number[] => {
    // trivially sort input less than 2 items
    if (input.length <= 2) {
        return input.sort((a, b) => a - b);
    }

    // pick pivot, rearrange, then recursively sort any input longer than 2
    const pivotIndex = Math.floor(input.length / 2);

    // move all greater than pivot items behind pivot index
    for (let index = 0; index < pivotIndex; index++) {
        if (input[index] > input[pivotIndex]) {
            input.splice(input[pivotIndex], 0, input[index]);
            input.splice(input[index], 1);
        }
    }

    // move all less than pivot items before pivot index
    for (let index = pivotIndex + 1; index < input.length; index++) {
        if (input[index] < input[pivotIndex]) {
            input.splice(0, 0, input[index]);
            input.splice(input[index], 1);
        }
    }

    return QuickSort(input.slice(0, pivotIndex)).concat(
        [input[pivotIndex]],
        QuickSort(input.slice(pivotIndex + 1))
    );
};

QuickSort(input);
console.log(input);
