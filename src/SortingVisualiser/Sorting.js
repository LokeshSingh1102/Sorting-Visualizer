import React, { useEffect, useState } from 'react'
import './Sorting.css'
import {mergeSort} from '../sortingAlgorithms/sortingAlgorithms';

export default function Sorting() {

    // Change this value for the speed of the animations.
    const ANIMATION_SPEED_MS = 150;

    // Change this value for the number of bars (value) in the array.
    // const NUMBER_OF_ARRAY_BARS = 310;

    // This is the main color of the array bars.
    const PRIMARY_COLOR = 'turquoise';

    // This is the color of array bars that are being compared throughout the animations.
    const SECONDARY_COLOR = 'red';

    const [array, setArray] = useState([]);
    useEffect(() => {
        resetArray();
        // eslint-disable-next-line
    }, [])
    const resetArray = () => {
        const arr = []
        for (let i = 0; i < 190; i++) {
            arr.push(randomElement(5, 600))
        }
        setArray(arr)
    }
    const randomElement = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const bubbleSort = () => {

    }
    const mergesort = () => {
        const animations = mergeSort(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    const insertionSort = () => {

    }
    const quickSort = () => {

    }
    const testSortingAlgoritms = () => {
        const arr = []
        for (let i = 0; i < randomElement(0, 1000); i++) {
            arr.push(randomElement(-1000, 1000))
        }
        const jsSortedArray = arr.slice().sort((a, b) => a - b)
        const sortedMerge = mergeSort(arr)
        console.log(checkEqual(jsSortedArray, sortedMerge))
    }
    const checkEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false
        else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false
            }
        }
        return true;
    }

    return (
        <div className='array-box'>
            {array.map((value, idx) => {
                return (<div className='array-bar' key={idx} style={{ height: `${value}px` }}>
                </div>)
            })}
            <button onClick={resetArray} >Generate New Array</button>
            <button onClick={bubbleSort} >Bubble Sort</button>
            <button onClick={insertionSort} >Insertion Sort</button>
            <button onClick={quickSort} >Quick Sort</button>
            <button onClick={mergesort} >Merge Sort</button>
            <button onClick={testSortingAlgoritms} >Test Sorting Algoritms</button>
        </div>
    )
}