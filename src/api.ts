const cvdata = {
    "header": {
        "image": "nonuser",
        "title": "Huynh Dac Nhat Tan",
        "content": "My current aim is to understand how a real life application works, how it can be deployed into a huge audiences world.\nI am fascinated by mobile apps and websites, also the way data can visualize our daily life and seeking for a chance to approach it. Willing to learn new things, from algorithms to doing research with new technologies."
    },
    "body": {
        "sub": [
            {
                "title": "Contact",
                "listcontact":
                {
                    "tel": "0388338072",
                    "gmail": "nitanhuynh@gmail.com",
                    "facebook": "https://fb.com/kuro.huynh.73",
                },
            },
            {
                "title": "Skills",
                "listitem": [
                    {
                        "content": "Comunication, teamwork and presentation.",
                    },
                    {
                        "content": "Basic managing projects and collaboration with github and docker.",
                    },
                    {
                        "content": "Basic Office tools: Word, Excel, Power Point and Power BI.",
                    }
                ],
            },
            {
                "title": "Certificates",
                "listitem": [],
            }
        ],
        "main": [
            {
                "title": "Education",
                "listitem": [],
            },
            {
                "title": "Experiences",
                "listitem": [],
            }
        ]
    }
}

export interface CVDataHeader {
    content: string,
    image: string,
    title: string,
}

export interface CVListData {
    content: string,
}

export interface CVContactList {
    tel: string,
    gmail: string,
    facebook: string,
}

export interface CVDataBody {
    title: string,
    listitem?: CVListData[],
    listicon?: CVListData[],
    listcontact?: CVContactList,
}

export const fetchData = async () => {
    const d = cvdata;
    return d;
} 