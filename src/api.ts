const cvdata = {
    "header": {
        "image": "nonuser",
        "title": "Huynh Dac Nhat Tan",
        "content": "My current aim is to understand how a real-life IT product works, and what strategies and processes are needed to operate it.\nI am fascinated by embedded software, how it can communicate with other hardware devices, also the way data can visualize our daily life and seeking a chance to approach these technologies.\n Willing to learn new things, from algorithms to doing research with new technologies."
    },
    "body": {
        "sub": [
            {
                "title": "Contact",
                "listcontact":
                {
                    "tel": "0388338072",
                    "gmail": "nitanhuynh@gmail.com",
                    "github": "https://github.com/NhatTan-uit",
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
                        "content": "Major: Social Media and Web Technologies",
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
                        "content": "Researched and understand data structures, algorithms, C++ OOP and cursor. Ability to think in code, optimize, reuse in C++, naming convention and research the use of logic interfaces, and libraries inside a system",
                        "timescheme": {
                            "title": "C, C++ programming",
                            "timestart": "06/2019",
                            "timeend": "02/2021",
                        }
                    },
                    {
                        "content": "QuestGame with quizapi, Spotify clone with Spotify Dev API to serve back-end. \nE-commerce novel reading website built with MERN stack, redux and restful API.",
                        "timescheme": {
                            "title": "ReactJS web application",
                            "timestart": "09/2021",
                            "timeend": "12/2021",
                        }
                    },
                    {
                        "content": "Flutter cloning ninja-fruit using BloC to support logic state and props and dev.pub API. \nXamarin cloning GameK using XAML to build UI and C# for structure.",
                        "timescheme": {
                            "title": "Moblie application with Flutter, Xamarin",
                            "timestart": "04/2022",
                            "timeend": "07/2022",
                        }
                    },
                    {
                        "content": "Design this CV using React Typescript with printer API and styled-component.",
                        "timescheme": {
                            "title": "CV App with React Typescript",
                            "timestart": "08/2023",
                            "timeend": "current",
                        }
                    },
                    {
                        "content": "Researching deep learning models for NLP and recommender systems with IEEE, arxis papers and journals references.",
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
    github: string,
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