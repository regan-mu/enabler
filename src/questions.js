import {star, triangle, rectangle, circle, pigeon, cat, puppy, squirrel} from './assets';
const shapesStructure = "Choose the picture with";
const animalsStructure = "Select the picture with";
const questions = {
    shapes: {
        qns: [
            {
                qn:  `${shapesStructure} Rectangle`,
                ans: "rectangle"
            },
            {
                qn: `${shapesStructure} Circle`,
                ans: "circle"
            },
            {
                qn: `${shapesStructure} Star`,
                ans: "star"
            }, 
            {
                qn: `${shapesStructure} Triangle`,
                ans: "triangle"
            }
        ],
        images: [
            {
                image: circle,
                label: "circle"
            },
            {
                image: rectangle,
                label: "rectangle"
            },
            {
                image: triangle,
                label: "triangle"
            },
            {
                image: star,
                label: "star"
            }
        ]
    },
    animals: {
        qns: [
            {
                qn: `${animalsStructure} Cat`,
                ans: "cat"
            },
            {
                qn: `${animalsStructure} Dog`,
                ans: "dog"
            },
            {
                qn: `${animalsStructure} Squirrel`,
                ans: "squirrel"
            },
            {
                qn: `${animalsStructure} Bird`,
                ans: "bird"
            }
        ],
        images: [
            {
                image: cat,
                label: "cat"
            },
            {
                image: puppy,
                label: "dog"
            },
            {
                image: pigeon,
                label: "bird"
            },
            {
                image: squirrel,
                label: "squirrel"
            }
        ]
    }
}

export default questions;