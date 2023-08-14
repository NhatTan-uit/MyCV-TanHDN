const cvdata = {
    "header": {
        "image": "nonuser",
        "title": "Huynh Dac Nhat Tan",
        "content": "My current aim is to understand how a real-life application works, and what strategies and processes are needed to operate it.\nI am fascinated by mobile apps and websites, also the way data can visualize our daily life and seeking a chance to approach its technologies. Willing to learn new things, from algorithms to doing research with new technologies."
    },
    "body": {
        "sub": [
            {
                "title": "Contact",
                "listcontact":
                {
                    "tel": "0388338072",
                    "gmail": "nitanhuynh@gmail.com",
                },
            },
            {
                "title": "Certificates",
                "listitem": [
                    {
                        "content": "Devera Academy Web Dev and Mobile with Flutter Certificate",
                    },
                    {
                        "content": "TOEIC SW Certificate 130/160 issued by ETS in 2023",
                    }
                ],
            },
            {
                "title": "Skills",
                "listitem": [
                    {
                        "content": "Constant communication and feedback to clarify the problems",
                    },
                    {
                        "content": "Ability to brainstorm, cultivate and sharing ideas in group",
                    },
                    {
                        "content": "Basic projects management and collaboration with github and docker.",
                    },
                    {
                        "content": "Basic MS Office tools: Word, Excel, Power Point and Power BI.",
                    }
                ],
            }
        ],
        "main": [
            {
                "title": "Education",
                "listitem": [
                    {
                        "content": "University of Information and Technology (Vietnam National University - HCMC)",
                        "isbold": true,
                        "isinline": true,
                    },
                    {
                        "content": "Major: ",
                        "isinline": true,
                    },
                    {
                        "content": "Social Media and Web Technologies",
                        "isinline": true,
                    },
                    {
                        "content": "August 2019 - now",
                        "isinline": true,
                    },
                    {
                        "content": "|",
                        "isbold": true,
                        "isinline": true,
                    },
                    {
                        "content": "GPA: 7.9/10",
                        "isinline": true,
                    }
                ],
            },
            {
                "title": "Projects",
                "listitem": [
                    {
                        "content": "QuestGame with quizapi, Spotify clone using ReactJS and Spotify Dev API to serve back-end",
                        "timescheme": {
                            "title": "QuestGame and Spotify with ReactJS",
                            "timestart": "09/2021",
                            "timeend": "12/2021",
                        }
                    },
                    {
                        "content": "E-commerce novel reading website build with MERN stack, redux and restful API",
                        "timescheme": {
                            "title": "Novel Reading website - docln.net cloning",
                            "timestart": "09/2021",
                            "timeend": "12/2021",
                        }
                    },
                    {
                        "content": "Design this CV using React Typescript with printer api and styled-component.",
                        "timescheme": {
                            "title": "CV App with Typescript",
                            "timestart": "08/2023",
                            "timeend": "current",
                        }
                    },
                    {
                        "content": "Doing research, analysis about DW & OLAP, Social Media Data Mining with ps4 games sale dataset on kaggle and python",
                        "timescheme": {
                            "title": "Data warehous & OLAP and Social Network Mining",
                            "timestart": "03/2022",
                            "timeend": "12/2022",
                        }
                    },
                    {
                        "content": "Doing research on deep learning models for NLP and recommender system with IEEE, arxis papers and jornals references",
                        "timescheme": {
                            "title": "Speech detection on Vietnamese dataset",
                            "timestart": "02/2023",
                            "timeend": "06/2023",
                        }
                    },
                ],
            }
        ]
    }
}

export interface CVDataHeader {
    content: string,
    image: string,
    title: string,
}

export interface CVScheme {
    title: string,
    timestart: string,
    timeend: string,
}

export interface CVListData {
    content: string,
    isbold?: boolean,
    isinline?: boolean,
    timescheme?: CVScheme,
}

export interface CVContactList {
    tel: string,
    gmail: string,
}

export interface CVDataBody {
    title: string,
    listitem?: CVListData[],
    listcontact?: CVContactList,
}

export const fetchData = async () => {
    const d = cvdata;
    return d;
} 