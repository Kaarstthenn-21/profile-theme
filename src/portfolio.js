/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kaarstthenn",
  title: "Hi! I´m Kaarstthenn",
  subTitle: emoji(
    "A passionate DevOps and SRE 🚀 having an experience of administrate servers in linux and CI/ CD with Jenkins with aplications built in Net core, Angular, Node and More."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1a70ri0nfumWi5_BI12MYP4V6V0puYCRx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kaarstthenn-21",
  linkedin: "https://www.linkedin.com/in/alexander-ancco-escobar/",
  gmail: "kaarstthen.ancco@tecsup.edu.pe",
  gitlab: "https://gitlab.com/saadpasta",
  twitter: "https://twitter.com/KaarsAlexander",
  medium: "https://medium.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate about cloud technologies, essentially in differents providers cloud",
  skills: [
    emoji(
      "⚡ Integration of services in cloud providers such as Azure / AWS / GCP"
    ),
    emoji("⚡ Development of microservices in languages ​​such as Net core, Python and Docker"),
    emoji(
      "⚡ CI/CD with Jenkins, Azure Pipelines and Nexus"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "PostgreSql",
      fontAwesomeClassname: "fa-thin fa-elephant"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "TECSUP Institute",
      logo: require("./assets/images/tecsup.png"),
      subHeader: "Tecnic in Design and Develop of Software",
      duration: "Agost 2018 - June 2022",
      desc: "Study the necessary bases for the development and integration of software products",
      descBullets: [
        "Mobile app development",
        "Cloud application deployment with AWS",
        "Web Apps development with Angular, Htmls, Css, Ts",
        "Desktop Apps development with Netcore and Java",
        "Scripts with python and Shell"
      ]
    },
    {
      schoolName: "AWS Academy",
      logo: require("./assets/images/aws.png"),
      subHeader: "Arquitect Of Solutions",
      duration: "December 2021 - Actually",
      desc: "Knowledge in networks, architecture with cloud solutions",
      descBullets: ["Deployment, monitoring, costs, security"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Continuous Integration & continuous delivery", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Deploy",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend developer",
      company: "Smart Reasons",
      companylogo: require("./assets/images/smart.png"),
      date: "Dec 2021 – Present",
      desc: "Migration of finance module services, Database tuning, modeling, creation of stored procedures. Working with enterprise architectures such as design patterns and high concurrency",
      descBullets: [
        "Docker",
        "Net Core",
        "Sql Server",
        "PostgreSql",
        "Bash Script - Jenkins",
        "AWS - Monitoring, Deploy, Storage"
      ]
    },
    {
      role: "Full Stack Developer and SRE",
      company: "Frescura Peruana S.A.C",
      companylogo: require("./assets/images/frescuraperuana.png"),
      date: "Oct - 2021 –  Present",
      desc: "Development of an api, for entry, exit of products, stock management, debt management among other features for business management in addition to mobile application",
      descBullets:[
        "Angular",
        "Net Core",
        "Sql Server",
        "Deploy AWS",
        "Docker",
        "Kubernetes"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Corporación Nativa S.A.C",
      companylogo: require("./assets/images/nativapng.png"),
      date: "Jul 2021 – Ago 2021",
      desc: "Elaboration of ERP for sale of alpaca garments, for recognized exporting company of products. In which you apply web technologies such as:Laravel, Docker, Sql Server AWS and more",
      descBullets:[
        "Laravel",
        "Docker",
        "Sql Server",
        "AWS",
        "and More Tecnologies Web"
      ]

    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/gas.png"),
      projectName: "Migo Gas",
      projectDesc: "App to inform the best prices of fuels for cars as well as prices of natural gas for domestic consumption. With application of web technologies, mobile and cloud solutions with high concurrency ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://migogas.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/frescuraperuana.png"),
      projectName: "Frescura Peruana",
      projectDesc: "Web application, for sale of organic products at home, in addition to armed sales by routines and armed with personalized diets, exercised in Arequipa and soon the rest of Peru",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://frescuraperuana.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Amazon Web Services - Foundamentals",
      subtitle:
        "Fundamentals of cloud solutions and architecture, application deployment complying with the basic principles of CI/CD",
      image: require("./assets/images/aws.png"),
      footerLink: [
        {
          name: "Certification",
          url: ""
        }
      ]
    },
    {
      title: "Google Cloud Platform",
      subtitle:
        "Certification cloud solutions fundamentals",
      image: require("./assets/images/gcp.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/14my4yKPbx3NMSzyOoDyO5B1r8ttbKRBX/view?usp=sharing"
        }
      ]
    },

    {
      title: "Cisco Foundamentals",
      subtitle: "NetAcad - Courses By Tecsup",
      image: require("./assets/images/cisco.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1IhpKqkXEdJku9v04QHH_h3eJvPriNibh/view?usp=sharing"},        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs & News",
  subtitle:
    "News, technologies and trends for the world of programming",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://medium.com/the-programmer/kubernetes-fundamentals-for-absolute-beginners-architecture-components-1f7cda8ea536",
      title : "Kubernetes Fundamentals",
      description : "La necesidad misma de hacer que nuestra compleja aplicación sea altamente disponible, escalable, portátil e implementable en módulos pequeños de forma independiente conduce al nacimiento de Kubernetes"
    },
    {
      url: "https://medium.com/@lopezlucas/identidad-como-servicio-idaas-asp-net-core-api-okta-5e89c6e91dc0",
      title: "Identidad como Servicio (IDaaS) NetCore",
      description: "Este es el tercer artículo de una serie sobre Identidad como Servicio — Identity-As-A-Service. Es este artículo vamos a ver cómo configurar una API ASP Net Core para validar las identidades de los usuarios usando Okta"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Terraform introduction Hashicorp Tecnology",
      subtitle: "induction with terraform IAC",
      slides_url: "https://docs.google.com/presentation/d/1O7oBkMUnYXkIglb1EVrQfs_0SAlywXS7l_0krVydCW0/edit?usp=sharing",
      event_url: "https://www.terraform.io/"
    },
    {
      title: "DevOps CI/CD Foundamentals ",
      subtitle: "DevOps culture",
      slides_url: "https://docs.google.com/presentation/d/1W3XG0eP2cyZywK5O3ZExgUvFvazpJCbGsp6SA6PJZro/edit?usp=sharing",
      event_url: "/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+51-927316613",
  email_address: "kaarstthen.ancco@tecsup.edu.pe"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
