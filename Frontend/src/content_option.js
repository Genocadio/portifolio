let image = require("./assets/images/profile.jpg");
let titleima = require("./assets/images/favicon.png");
const logotext = "Cadiot";
const meta = {
    title: "Geno Yves Cadiot",
    description: "I’m Geno Yves Cadiot Full stack devloper,currently working in Kigali",
    favi_ico: titleima,
};

const introdata = {
    title: "I’m Geno Yves Cadiot",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "Iam good at devops",
        forth: "I set up and maintain systems.",
    },
    description: "Hello, I'm Geno Yves Cadiot, a dedicated software developer based in Kigali, Rwanda. My passion lies in crafting innovative solutions through code. Currently working in Kigali, I am committed to expanding my software engineering skills, embracing new challenges, and contributing to the dynamic field of technology. With a strong foundation and a fervent desire to learn, I am poised to make meaningful contributions to the world of software development.",
    your_img_url: image, // Update the path to the correct image file,
    
};

const dataabout = {
    title: " professional bio",
    aboutme: "Hello, I'm Geno Yves Cadiot, a dedicated software developer based in Kigali, Rwanda. My passion lies in crafting innovative solutions through code. Currently working in Kigali, I am committed to expanding my software engineering skills, embracing new challenges, and contributing to the dynamic field of technology. With a strong foundation and a fervent desire to learn, I am poised to make meaningful contributions to the world of software development.",
};
const worktimeline = [{
        jobtitle: "Student at ALX in Software Engineering",
        where: "ALX",
        date: "2023",
    },
    {
        jobtitle: "Student at Fullstack open",
        where: "University of Helsinki",
        date: "2024",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Django",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: 'Nodejs',
        value: 80,
    },
    {
        name: "C",
        value: 80,
    },
    {
        name: "SQL",
        value: 80,
    },
    {
        name: 'MongoDB',
        value: 60,
    },

];

const services = [{
        title: "Frontend Development and Design",
        description: "As a front-end developer, I am passionate about creating visually appealing and user-friendly interfaces that enhance the overall user experience.",
    },
    {
        title: "Backend Development",
        description: "As a back-end developer, I am focused on building robust server-side applications and ensuring the seamless functionality that powers the dynamic features of web applications.",
    },
    {
        title: "Devops and system mantainance",
        description: "As someone experienced in DevOps, networking, and system maintenance, my commitment lies in ensuring the reliability and efficiency of IT infrastructure, utilizing continuous improvement practices for seamless operations",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "yvesgeno@outlook.com",
    YOUR_FONE: "+250784505290",
    description: "Call me or directly send an email. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_j5r3kph",
    YOUR_TEMPLATE_ID: "template_lhltt5h",
    YOUR_USER_ID: "-ZA8xgkAhBwvwH7vg",
};

const socialprofils = {
    github: "https://github.com/Genocadio",
    telegram: "http://t.me/Cadiotyves",
    linkedin: "https://www.linkedin.com/in/geno-yves-385b92203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/cadiogeno?t=UUo0Bdg0DmK5UR3BMZKb5A&s=09",
    instagram: "https://www.instagram.com/cadiotyves"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};