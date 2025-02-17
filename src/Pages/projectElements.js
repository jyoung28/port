import useTypingEffect from "../Components/TypingEffect";
let posts = [
    {
        title: "Fantasy Football Drafting Agent",
        description: "A project for my Deep Learning class that I expanded upon after the class was done. The system first tries to predict \"Risky\" Stats for each player for the upcoming system and uses those predictions to create a risk score for each player. These scores and the player projected PPR points are used to create a Drafting environment where a DQN Reinforcement Learning model drafts players from. After training the model drafted teams that were within 100 pts of other teams who used common strategies such as maximizing projections and popularity.",
        link: "https://github.com/jyoung28/Fantasy-Football-Deep-learning-Project",
        linkText: "Source Code",
        imgClass : "post-image"
    },
    {
        title: "Sharded, Linearizable, Available Key-Store with Dynamic Load-Balancing and Atomic Multi-Key transactions.",
        description:"This project was another course-long venture that was challenging but rewarding. By taking the project in steps, first building the key-value store, then implementing a primary and backup failsafe, then updating the project to use the Paxos algorithm, and finally separating the store across several shards, me and my project partner were able to complete the project. One aspect of this project I enjoyed was the design documents that were reviewed by the course staff before any code was written. This forced me to be more methodical in how I approached the steps of the project, which I adopted into my own workflow and began to see immediate rises in productivity and learning rate.",
        link: "https://courses.cs.washington.edu/courses/cse452/24sp/#labs",
        linkText: "Read More Here",
        imgClass : "post-image"
    },
    {
        title: "Multi-threaded Disk-Indexed File Search System",
        description: "The culmination of the CSE 333 Systems Programming course was a project that took the entire quarter to complete. The project was similar to the original Google File System(GFS), parsing documents, using an inverted index to search them for keywords, and storing all data structures on disk to preserve memory. The system was then scaled to a multithreaded web server that could be accessed by anyone using a tcp connection. The project gave me strong C, and C++ programming skills, as well as a deep understanding of web sockets and concurrency in C++.",
        link: "https://courses.cs.washington.edu/courses/cse333/24wi/resources/syllabus.html",
        linkText: "Read More Here",
        imgClass : "post-image"
    },
    {
        title: "Spotify Rank Game(Typescript, React, Express, Firebase Cloud Firestore, Google Cloud App Engine)",
        description:  "Over Summer 2023 I created a full-stack daily challenge revolving around guessing how 5 random trending songs rank in popularity. This project involved interacting with the Spotify API every 24 hours using cron scheduling, creating a Typescript-React front-end for the user to interact with, writing my own Express API to handle site security and API calls, and using Firebase Cloud FireStore to store user information. I used Chart.JS to visualize all user data and Firebase to authenticate users. Deployment was the trickiest part of this project, which took many attempts on different platforms until eventually hosting the API on Google Cloud App Engine, and using Netlify to host the front-end. Feel free to try it for yourself!",
        image: "spotify.png",
        link: "https://sage-quokka-22cb76.netlify.app/",
        linkText: "Check it out!",
        imgClass : "post-image"

    },
    {
        title: "PDF Search Tool(OpenAI API, LlamaIndex, Flask, Python)",
        description: " At the UC Berkeley AI/LLM 2023 Hackathon, all participants were given OpenAI API tokens for our projects. After attending a workshop led by the CEO, I decided to use the LlamaIndex framework to customize the input to GPT-3.5 and allow pdf files to be inserted to allow for contextual search, and summarization. I built the tool using the python web development framework Flask and learned a lot about artificial intelligence and LLMs just by attending workshops, working on my project, and playing with the API.",
        image: "pdf.jpeg",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7076292317627764736/",
        linkText:"LinkedIn Post",
        imgClass:"pdfimg"

    },
    {
        title: "React Drafting Tool (TypeScript, React, Express)",
        description: "The final project for my software engineering class(CSE 331), was a tool where designated users could login and draft from a list of items. Users also had the ability to create their own drafts, specifying the allowed users and draft items. The project was a trial by fire where I learned many of the nuances of react through iterative debugging, but at the end I came out of the class confident in my knowledge and proficiency in React.",
        imgClass : "post-image"
    },
    {
        title: "Guardian Security(Node.js, HTML, CSS, AWS)",
        description: "During Dubhacks '22, my team decided to take on the T-Mobile Track, where T-Mobile engineers provided a IoT kit for our project to be based off of. We decided harness the multiple sensors and create a child monitoring device that uploaded the data to AWS and then to our node.js front-end. I led front-end design and sed the google maps API to present our data while under a 24 hour time crunch. After presenting the project T-Mobile executives we won Second Place for T-Mobile's Most marketable Hack",
        image: "guardian.jpg",
        imgClass : "post-image"
    },
    {
        title: "C Memory Management Tool",
        imgClass : "post-image",
        description: "As part of the coursework for my class CSE 374, Intermediate Programming Concepts, I was tasked with writing from scratch my own memory allocating and freeing tool in C (recreating malloc and free from scratch). The project was very conceptual and very comprehensive, especially for someone who had learned to code 6 months prior. However the cahllenge was invigorating and I was able to complete the project.",
    },

    {
        title: "Java Meal Planner(Java)",
        description: "After taking CSE 142, I wanted to code a tool I would use in my everyday life. I created a Java program that used my current dining hall balance to calculate how much I would need to spend each day to have $0 on the last day of the quarter. This program was very simple, but it helped instill a love for coding and creating practical applications.",
        imgClass : "post-image",
    },
];

export default posts;
