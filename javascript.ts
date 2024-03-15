let input = [12, 212, 5123, 3231, 22, 1231, 51829, 182, 192, 1001];

const QuickSort = (input: number[]): number[] => {
    // trivially sort input less than 2 items
    if (input.length <= 2) {
        return input.sort((a, b) => a - b);
    }

    // pick pivot, rearrange, then recursively sort any input longer than 2
    let pivotIndex = input.length - 1;
    const pivot = input[pivotIndex];

    // move all greater than pivot items behind pivot index
    let index = 0;
    while (index < pivotIndex) {
        if (input[index] > pivot) {
            input.splice(pivotIndex + 1, 0, input[index]);
            input.splice(index, 1);
            pivotIndex -= 1;
        } else {
            index++;
        }
    }

    if (pivotIndex >= input.length || pivotIndex + 1 >= input.length) {
        return input;
    }

    return QuickSort(input.slice(0, pivotIndex)).concat(
        [pivot],
        QuickSort(input.slice(pivotIndex + 1))
    );
};

console.log(input);
input = QuickSort(input);
console.log(input);
