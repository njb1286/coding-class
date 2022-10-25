import { FETCH_COURSES } from "./types";

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running with Redis",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
            {
                title: "HTML/CSS Bootcamp",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
            {
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
            {
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
            {
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
            {
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
            {
                title: "UX for Developers",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus molestias unde aliquam suscipit et."
            },
        ]
    }
}