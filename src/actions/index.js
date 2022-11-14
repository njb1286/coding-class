import { FETCH_COURSES, TOGGLE_ENROLLED } from "./types";

export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED,
        payload: id
    }
}

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {   
                id: 0,
                title: "Up and Running with Redis",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 1,
                title: "HTML/CSS Bootcamp",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 2,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 3,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 4,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 5,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 6,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 7,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 8,
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
            {   
                id: 9,
                title: "UX for Developers UX for Developers UX for Developers UX for Developers UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et.",
                enrolled: false
            },
        ]
    }
}

document.documentElement.style.setProperty('--library-grid-count', fetchCourses().payload.length);