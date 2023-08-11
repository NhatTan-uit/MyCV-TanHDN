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
                        "content": "Basic projects management and collaboration with github and docker.",
                    },
                    {
                        "content": "Basic MS Office tools: Word, Excel, Power Point and Power BI.",
                    }
                ],
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
            }
        ],
        "main": [
            {
                "title": "Education",
                "listitem": [
                    {
                        "content": "Studying",
                        "isinline": true,
                    },
                    {
                        "content": "Social Media and Web Technologies",
                        "isbold": true,
                        "isinline": true,
                    },
                    {
                        "content": "at",
                        "isinline": true,
                    },
                    {
                        "content": "University of Information and Technology (Vietnam National University - HCMC)",
                        "isbold": true,
                        "isinline": true,
                    },
                    {
                        "content": "from 2019 to 2023,",
                        "isinline": true,
                    },
                    {
                        "content": "GPA: 7.9/10",
                        "isinline": true,
                    }
                ],
            },
            {
                "title": "Experiences",
                "listitem": [
                    {
                        "content": "Basic understanding of programming languages: C++, C#, markup languages (XML, XAML, HTML,...), CSS, SASS, java, javascript, python,..."
                    },
                    {
                        "content": "Naming Convention, Thinking in Code, React, trying to optimize and reuse code. Basic debugging skills and ability to research to understand interfaces logic inside a system",
                    },
                    {
                        "content": "Have experience in Mobile apps with Flutter and Xamarin.",
                    },
                    {
                        "content": "Have experience in React application. Some minor projects: Spotify clone with Spotify dev API, E-commerce web app, QuestGame with quizapi,...",
                    },
                    {
                        "content": "SQL and noSQL understanding, server API response and data management. Basic experience in data mining, data visualization, data storage and OLAP, and deep learning (NLP and recommender system)",
                    }
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

export interface CVListData {
    content: string,
    isbold?: boolean,
    isinline?: boolean,
}

export interface CVContactList {
    tel: string,
    gmail: string,
    facebook: string,
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