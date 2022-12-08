import {
    star, triangle, rectangle, circle, 
    pigeon, cat, puppy, squirrel,
    number1, number2, number3, number4,
    pink, green, orange,
    hands, kneel, feet, arm,
} from './assets';
const shapesStructure = "Choose the image with";
const animalsStructure = "Select the picture with";
const colorsStructure = "Select the object with color";
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
    },
    numbers: {
        qns: [
            {
                qn: `${shapesStructure} number one`,
                ans: "one"
            },
            {
                qn: `${shapesStructure} number two`,
                ans: "two"
            },
            {
                qn: `${shapesStructure} number three`,
                ans: "three"
            },
            {
                qn: `${shapesStructure} number four`,
                ans: "four"
            }
        ],
        images: [
            {
                image: number1,
                label: "one"
            },
            {
                image: number2,
                label: 'two'
            },
            {
                image: number3,
                label: "three"
            },
            {
                image: number4,
                label: "four"
            }
        ]
    },
    colors: {
        qns: [
            {
                qn: `${colorsStructure} green`,
                ans: "green"
            },
            {
                qn: `${colorsStructure} pink`,
                ans: "pink"
            },
            {
                qn: `${colorsStructure} orange`,
                ans: "orange"
            },
        ],
        images: [
            {
                image: pink,
                label: "pink"
            },
            {
                image: green,
                label: "green"
            },
            {
                image: orange,
                label: "orange"
            }
        ]
    },
    bodyparts: {
        qns: [
            {
                qn: `${shapesStructure} arm`,
                ans: "arm"
            },
            {
                qn: `${shapesStructure} knees`,
                ans: "knees"
            },
            {
                qn: `${shapesStructure} feet`,
                ans: "feet"
            },
            {
                qn: `${shapesStructure} hands`,
                ans: "hands"
            },
        ],
        images: [
            {
                image: arm,
                label: "arm"
            },
            {
                image: kneel,
                label: "knees"
            },
            {
                image: feet,
                label: "feet"
            },
            {
                image: hands,
                label: "hands"
            }
        ]
    }
}

export default questions;