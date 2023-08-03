const cvdata = {
    "header": {
        "image": "nonuser",
        "title": "Huynh Dac Nhat Tan",
        "content": "My current aim is to understand how a real life application work, how it can be deployed into a huge audiences world.\nI am fascinated by mobile apps and websites, also the way data can visualize our daily world and seeking for a chance to approach it. Willing to learn new things, from algorithms to doing research with new technologies."
    },
    "body": {
        "main": [
            {
                "title": "Contact",
                "content": ""
            },
            {
                "title": "Skills",
                "content": ""
            },
            {
                "title": "Certificates",
                "content": ""
            }
        ],
        "sub": [
            {
                "title": "Objective",
                "content": ""
            },
            {
                "title": "Education",
                "content": ""
            },
            {
                "title": "Projects",
                "content": ""
            }
        ]
    }
}

export interface CVDataHeader {
    content: string,
    image: string,
    title: string,
}

export interface CVDataBody {
    content: string,
    title: string,
}

export const fetchData = async () => {
    const d = cvdata;
    return d;
} 