const cvdata = {
    "header": {
        "image": "null",
        "title": "Huynh Dac Nhat Tan",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae urna sed nulla bibendum lobortis. Curabitur eu feugiat mauris, eu iaculis magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vel ante mauris. Sed fermentum lacus odio, non condimentum odio fringilla a. Donec tempus, nisl vitae eleifend tristique, ante lacus vehicula dolor, sed ultricies mauris urna at libero"
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

export interface CVData {
}

export const fetchData = async () => {
    const d = cvdata;
    return d;
} 