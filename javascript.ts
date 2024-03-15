let input = Array.from(Array(100), () => Math.floor(Math.random() * 100));

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

    if (pivotIndex + 1 >= input.length) {
        if (pivotIndex <= 0) {
            return [pivot];
        } else {
            return QuickSort(input.slice(0, pivotIndex)).concat([pivot]);
        }
    } else if (pivotIndex <= 0) {
        if (pivotIndex + 1 >= input.length) {
            return [pivot];
        } else {
            return [pivot].concat(QuickSort(input.slice(0, pivotIndex)));
        }
    } else {
        return QuickSort(input.slice(0, pivotIndex)).concat(
            [pivot],
            QuickSort(input.slice(pivotIndex + 1))
        );
    }
};

function quicksort2(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left: number[] = [];
    let right: number[] = [];
    let equal: number[] = [];

    for (let val of arr) {
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        } else {
            equal.push(val);
        }
    }
    return [...quicksort2(left), ...equal, ...quicksort2(right)];
}

console.log(input);
input = QuickSort(input);
console.log(input);
