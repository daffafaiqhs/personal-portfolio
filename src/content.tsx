import type { IconType } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin, IoMailOpen } from "react-icons/io5";
import { BNSPLogo, GSILogo, UPNLogo } from "./assets/logo/organization";
import { AsmenSessionRuangguru, FPPresentationRuangguru, LastDayGSI, SuratKelulusanRuangguru } from "./assets/images";
import { AsmenCert, BNSPCert, EPTCert, GSICert, RekomendasiAsmen, RuangguruCert } from "./assets/certificate";
import { RuangguruLogo } from "./assets/logo/organization/Ruangguru";
import { ChakraUILogo, CSSLogo, FigmaLogo, FlutterLogo, GolangLogo, HTMLLogo, HuggingFaceLogo, JavascriptLogo, MySQLLogo, PostgreSQLLogo, PythonLogo, ReactJSLogo, TailwindCSSLogo } from "./assets/logo/tech";
import { CoverBrowserExtension, CoverIONS, CoverModel, CoverPersonalPortfolio, CoverStudentPortal } from "./assets/projects";

type ContactName = "email" | "github" | "linkedin"
type ContactInformation = {
  name: ContactName,
  url: string,
  logo: IconType
}[]

export const contacts: ContactInformation = [
  {
    name: "email",
    url: "mailto:daffafaiqhs@gmail.com",
    logo: IoMailOpen
  },
  {
    name: "github",
    url: "https://github.com/daffafaiqhs",
    logo: IoLogoGithub
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/daffafaiqhs",
    logo: IoLogoLinkedin
  },
]

// eslint-disable-next-line react-refresh/only-export-components
function Highlight(props: React.ComponentProps<"span">) {
  return <span className="font-bold text-brand-orange">
    {props.children}
  </span>
}

export const introductions = [
  <>
    I'm a fresh Informatics graduate based in{" "}
    <Highlight>Surabaya, Indonesia</Highlight>,
    passionate about building{" "}
    <Highlight>web</Highlight>,{" "}
    <Highlight>mobile</Highlight>,{" "}
    <Highlight>backend</Highlight>, and{" "}
    <Highlight>AI</Highlight> solutions.
  </>,

  <>
    Hello! I'm a fresh Informatics graduate based in{" "}
    <Highlight>Surabaya, Indonesia</Highlight>,
    where I spend most of my time turning ideas into{" "}
    <Highlight>web</Highlight>,{" "}
    <Highlight>mobile</Highlight>,{" "}
    <Highlight>backend</Highlight>, and{" "}
    <Highlight>AI</Highlight> applications that
    are built to solve real problems.
  </>,

  <>
    Hey there! I'm a fresh Informatics graduate from UPN Veteran Jawa Timur
    based in{" "}
    <Highlight>Surabaya, Indonesia</Highlight>{" "}
    with a passion for software engineering. I enjoy building{" "}
    <Highlight>modern web applications</Highlight>
    , creating{" "}
    <Highlight>
      cross platform mobile apps
    </Highlight>
    , developing{" "}
    <Highlight>backend services</Highlight>, and
    exploring{" "}
    <Highlight>artificial intelligence</Highlight>{" "}
    through practical projects. Along the way, I've worked with{" "}
    <Highlight>
      React, React Native, Flutter, Go, FastAPI, TensorFlow,
    </Highlight>{" "}
    and more .
  </>,

  <>
    I’m a{" "}
    <Highlight>
      fresh Informatics graduate
    </Highlight>{" "}
    based in{" "}
    <Highlight>Surabaya, Indonesia</Highlight>. I
    have an unhealthy habit of noticing when a button is one pixel off, an
    animation feels too fast, or a layout just doesn't look right. While I enjoy
    building{" "}
    <Highlight>
      web, mobile, backend, and AI
    </Highlight>{" "}
    applications, what I enjoy even more is refining them until they feel
    natural to use. Outside of coding, I'm always exploring new technologies,
    experimenting with side projects, and finding better ways to build software
    that people genuinely enjoy using.
  </>,

  <>
    Greetings! I'm a fresh Informatics graduate based in{" "}
    <Highlight>Surabaya, Indonesia</Highlight>,
    with a passion for building complete software solutions . I enjoy taking an
    idea from the first sketch to a finished product by combining{" "}
    <Highlight>
      intuitive user interfaces
    </Highlight>
    ,{" "}
    <Highlight>
      reliable backend systems
    </Highlight>
    ,{" "}
    <Highlight>
      cross platform mobile applications
    </Highlight>
    , and{" "}
    <Highlight>AI-powered features</Highlight>.
    While I enjoy solving technical challenges, I probably spend just as much
    time refining the small details, polishing interactions, improving
    responsiveness, and making sure an application feels as good as it
    functions. To me, great software isn't measured only by{" "}
    <Highlight>clean code</Highlight>, but by how
    naturally people can use it. I'm always excited to learn new technologies,
    collaborate with others, and keep building products that create a{" "}
    <Highlight>meaningful impact</Highlight>.
  </>,
];

export type ExperienceTitle = "Work Experiences" | "Educations" | "Certifications"
export type ExperienceItem = {
  title: string,
  additionalTitleInformation: string | undefined,
  description: React.ReactElement,
  organizationName: string,
  organizationLogo: React.FC,
  duration: string,
  additionalDurationInformation: string | undefined,
  skillsAcquired: string[],
  attachments: string[],
}
type Experiences = {
  title: ExperienceTitle,
  items: ExperienceItem[]
}[]

export const experiences: Experiences = [
  {
    title: "Work Experiences",
    items: [
      {
        title: "Software Developer",
        additionalTitleInformation: "Internship",
        description:
          <>
            Throughout this internship, I strengthened my technical skills and
            applied the knowledge I gained at university by working on{" "}
            <b>real world mobile application development projects</b>. Beyond the
            technical experience, I had the opportunity to <b>collaborate</b> with
            talented professionals, <b>gain valuable insights</b> into modern
            software development practices, and <b>deepen my understanding</b> of
            teamwork, communication, and problem solving in a professional
            environment. This experience{" "}
            <b>
              significantly enhanced both my technical expertise and professional
              growth
            </b>
            . Some of my key responsibilities and contributions included:
          </>,
        organizationName: "PT. Greatsoft Solusi Indonesia",
        organizationLogo: GSILogo,
        duration: "Feb 2025 - May 2025",
        additionalDurationInformation: undefined,
        skillsAcquired: [
          "Developed cross platform mobile applications using Flutter with a focus on building responsive and maintainable user interfaces.",
          "Designed user interfaces and translated UI/UX designs into functional mobile screens using Figma and Flutter.",
          "Integrated RESTful APIs using the Dio library to fetch, send, and synchronize application data.",
          "Implemented local data persistence using SQLite for offline storage and efficient data management.",
          "Built and maintained application features including dashboards, monitoring modules, and digital forms.",
          "Applied state management, asynchronous programming, and error handling to ensure smooth application performance.",
          "Collaborated with team members using Git and participated in the software development lifecycle, including feature development, testing, and debugging.",
        ],
        attachments: [
          LastDayGSI, GSICert
        ],
      },
      {
        title: "Mentor Assistant",
        additionalTitleInformation: undefined,
        description:
          <>
            During the Ruangguru CAMP program under the Kampus Merdeka initiative,
            I was also appointed as a Mentor Assistant, where I had the
            opportunity to <b>support fellow participants</b> throughout their
            learning journey. This role helped me develop my{" "}
            <b>communication and mentoring abilities</b> while reinforcing my own
            understanding of the course materials. It was a valuable experience
            that contributed significantly to my technical growth and professional
            development. Some of my key responsibilities and contributions
            included:
          </>,
        organizationName: "PT. Ruang Raya Indonesia (Ruangguru)",
        organizationLogo: RuangguruLogo,
        duration: "9 Sep 2024 - 31 Dec 2024",
        additionalDurationInformation: undefined,
        skillsAcquired: [
          "Facilitated technical discussions and troubleshooting sessions, helping mentees debug issues and strengthen their problem solving skills.",
          "Reviewed mentees' projects and source code, providing constructive feedback to improve code quality, best practices, and overall understanding.",
          "Monitored mentees' learning progress, identified challenges they encountered, and reported updates to the Ruangguru team to ensure appropriate guidance and support.",
        ],
        attachments: [
          AsmenSessionRuangguru,
          AsmenCert,
          RekomendasiAsmen,
        ],
      },
    ]
  },
  {
    title: "Educations",
    items: [
      {
        title: "Bachelor of Informatics",
        additionalTitleInformation: "Grade 3.92 out of 4.00",
        description: <>My learning focus includes:</>,
        organizationName: "UPN Veteran Jawa Timur",
        organizationLogo: UPNLogo,
        duration: "2022  - 2026",
        additionalDurationInformation: undefined,
        skillsAcquired: [
          "Mastered mobile application development using React Native, including component based architecture, navigation, and state management.",
          "Developed web applications using HTML, CSS, and JavaScript with interactive user interfaces.",
          "Built strong programming and problem solving skills through Algoritma & Pemrograman, Pemrograman Lanjut, and Pemrograman Berorientasi Objek.",
          "Applied data organization and algorithmic problem solving using Struktur Data.",
          "Designed and managed relational databases through Basis Data and Basis Data Lanjut using MySQL, including database modeling, normalization, SQL queries, and optimization.",
          "Designed intuitive and user centered interfaces using Figma, including wireframing, prototyping, and UI design principles.",
          "Applied Artificial Intelligence and Machine Learning concepts using Python for model development, and predictive solutions.",
          "Learned software engineering principles through Rekayasa Perangkat Lunak and Analisis & Desain Sistem.",
          "Applied project planning, collaboration, and software development workflows through Manajemen Proyek.",
        ],
        attachments: [],
      },
      {
        title: "Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis",
        additionalTitleInformation: "Grade 99.01 out of 100",
        description:
          <>
            For four months, I participated in the{" "}
            <b>Independent Certified Study Program</b> under the Kampus Merdeka
            initiative, organized by the Ministry of Education, Culture, Research,
            and Technology. One of the program's partners, PT. Ruang Raya
            Indonesia (Ruangguru), hosted the Ruangguru CAMP program. Through this
            program, I delved into the{" "}
            <b>
              Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis
            </b>{" "}
            class. The learning experience in this program included:
          </>,
        organizationName: "PT. Ruang Raya Indonesia (Ruangguru)",
        organizationLogo: RuangguruLogo,
        duration: "9 Sep 2024 - 31 Dec 2024",
        additionalDurationInformation: undefined,
        skillsAcquired: [
          "Develop professional skills in communication, presentation, creative thinking, and strategic problem-solving through Keterampilan Inti subject.",
          "Use terminal, Visual Studio Code, and Git for efficient project management and collaboration through Rekayasa Piranti Lunak subject.",
          "Build web applications with HTML, CSS, Tailwind, and Node.js, focusing on RESTful APIs and asynchronous programming through Pemrograman Frontend Web Dasar subject.",
          "Create Single Page Applications using ReactJS, mastering components, state, and deployment through Pemrograman Frontend dengan React.",
          "Develop backend systems with Golang, including data structures, algorithms, unit testing, and concurrency through Pemrograman Backend Web dengan Golang.",
          "Design and manage relational databases while also learning about NoSQL database through Sistem Manajemen dan Teknologi Basis Data subject.",
          "Understand Machine Learning fundamentals and integrate AI technologies into applications throught Menguasai Teknologi Artificial Intelligence subject.",
        ],
        attachments: [
          FPPresentationRuangguru,
          RuangguruCert,
          SuratKelulusanRuangguru,
        ],
      },
    ]
  },
  {
    title: "Certifications",
    items: [
      {
        title: "Sertifikasi Junior Web Programmer",
        additionalTitleInformation: undefined,
        description:
          <>
            Successfully obtained the Junior Web Programmer professional
            certification issued by the Badan Nasional Sertifikasi Profesi (BNSP),
            demonstrating competency in fundamental web development concepts and
            industry standard programming practices. The certification validates
            my ability to develop web applications by applying software
            development principles, implementing programming logic, managing
            databases, and following professional standards in accordance with
            Indonesia's national competency framework.
          </>,
        organizationName: "Badan Nasional Sertifikasi Profesi (BNSP)",
        organizationLogo: BNSPLogo,
        duration: "",
        additionalDurationInformation: undefined,
        skillsAcquired: [],
        attachments: [BNSPCert],
      },
      {
        title: "English Proficiency Test (EPT)",
        additionalTitleInformation: "Credential ID 131114",
        description:
          <>
            Achieved a score of 460 on the English Proficiency Test
            (EPT) administered by UPA Bahasa UPN Veteran Jawa Timur, within the
            official score range of 310 to 677. The assessment evaluates English
            language proficiency across listening comprehension, structure and written
            expression, and reading comprehension, demonstrating my ability to
            understand and communicate in academic and professional contexts.
          </>,
        organizationName: "UPA Bahasa UPN Veteran Jawa Timur",
        organizationLogo: UPNLogo,
        duration: "",
        additionalDurationInformation: undefined,
        skillsAcquired: [],
        attachments: [EPTCert],
      },
    ]
  }
]

export type StackName = "HTML" | "CSS" | "Javascript" | "ReactJS" | "TailwindCSS" | "ChakraUI" | "Flutter" | "Golang" | "PostgreSQL" | "MySQL" | "Figma" | "Python" | "HuggingFace"
type TechStack = {
  name: StackName
  logo: React.FC<React.ComponentProps<"svg">>
}[]

export const techStack: TechStack = [
  {
    name: "HTML",
    logo: HTMLLogo
  },
  {
    name: "CSS",
    logo: CSSLogo
  },
  {
    name: "Javascript",
    logo: JavascriptLogo
  },
  {
    name: "ReactJS",
    logo: ReactJSLogo
  },
  {
    name: "TailwindCSS",
    logo: TailwindCSSLogo
  },
  {
    name: "ChakraUI",
    logo: ChakraUILogo
  },
  {
    name: "Flutter",
    logo: FlutterLogo
  },
  {
    name: "Golang",
    logo: GolangLogo
  },
  {
    name: "PostgreSQL",
    logo: PostgreSQLLogo
  },
  {
    name: "MySQL",
    logo: MySQLLogo
  },
  {
    name: "Figma",
    logo: FigmaLogo
  },
  {
    name: "Python",
    logo: PythonLogo
  },
  {
    name: "HuggingFace",
    logo: HuggingFaceLogo
  },
]

type LinkType = "Github" | "Demo" | "Live" | "Journal Article"
type LinkRestriction = {
  title: string,
  reason: string,
  provideContactButton: boolean
}
export type ProjectLink = {
  type: LinkType,
  url: string | undefined,
  restriction: LinkRestriction | undefined
}
export type Project = {
  title: string,
  description: string,
  techStack: StackName[],
  coverImage: string,
  coverAltText: string,
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    title: "Browser Extension for Cyberbullying Detection",
    description:
      "This project is part of my undergraduate thesis, focusing on the development of a browser extension for Instagram that applies a machine learning based cyberbullying detection model in real time. The goal was to transform the research into a functional application, demonstrating its practicality and potential for everyday use.",
    techStack: ["HTML", "CSS", "Javascript"],
    coverImage: CoverBrowserExtension,
    coverAltText: "Cyberbullying Detection Browser Extension Cover",
    links: [
      {
        type: "Github",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        restriction: {
          title: "Limited Access",
          reason: "I'm sorry but the item you are trying to access is restricted because it contains functionality that could be misused outside its intended purpose. Please contact me below if you would like to request access to the source code.",
          provideContactButton: true
        }
      },
      {
        type: "Demo",
        url: "https://drive.google.com/file/d/1RgwKj0udvb7iMokmtYgkn_sh7OPps2gA/view?usp=sharing",
        restriction: undefined
      },
      {
        type: "Journal Article",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        restriction: {
          title: "Not Published",
          reason:
            "I'm sorry, but the journal article for this project has not yet been published. Please check back later or contact me for the draft version.",
          provideContactButton: false
        }
      },
    ],
  },
  {
    title: "Machine Learning for Cyberbullying Detection",
    description:
      "This undergraduate thesis develops a BiLSTM based model for bilingual cyberbullying detectionachieving an accuracy of 95.97%. The model is enhanced with LIME to provide interpretable predictions by highlighting the words or phrases that influence each prediction.",
    techStack: ["Python"],
    coverImage: CoverModel,
    coverAltText: "Cyberbullying Detection Model Cover",
    links: [
      {
        type: "Github",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        restriction: {
          title: "Limited Access",
          reason:
            "I'm sorry but the item you are trying to access is currently under an academic embargo. Source code access is restricted until the embargo period ends. Please contact me below for inquiries.",
          provideContactButton: true
        }
      },
      {
        type: "Journal Article",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        restriction: {
          title: "Not Published",
          reason:
            "I'm sorry, but the journal article for this project has not yet been published. Please check back later.",
          provideContactButton: false
        }
      },
    ],
  },
  {
    title: "Personal Portfolio v1.1",
    description:
      "This portfolio showcases my journey as an aspiring Software Engineer, providing a comprehensive overview of the skills, projects, and experiences I have gained throughout my academic and professional journey.",
    techStack: ["HTML", "ReactJS", "TailwindCSS"],
    coverImage: CoverPersonalPortfolio,
    coverAltText: "Personal Portfolio Cover",
    links: [
      {
        type: "Github",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        restriction: undefined,
      },
      {
        type: "Live",
        url: "https://daffaiq.com/",
        restriction: undefined,
      },
    ],
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "As part of the final project for the Ruangguru CAMP program, I developed IONS, a smart home energy management system that helps households monitor and optimize their energy consumption more effectively using Artificial Intelligence.",
    techStack: [
      "HTML",
      "ReactJS",
      "ChakraUI",
      "PostgreSQL",
      "Golang",
      "HuggingFace",
    ],
    coverImage: CoverIONS,
    coverAltText: "IONS: The Gen-Z Way to Manage Electricity cover",
    links: [
      {
        type: "Github",
        url: "https://github.com/daffafaiqhs/ions",
        restriction: undefined,
      },
      {
        type: "Demo",
        url: "https://drive.google.com/file/d/1x2pn_VfSvDWR_5juuSbHgDQP1Hm4FSDB/view?usp=sharing",
        restriction: undefined,
      },
    ],
  },
  {
    title: "Ruangguru Student Portal",
    description:
      "As one of the final course project for the Ruangguru CAMP program, I built a Student Portal web application to streamline student data management. The application implements CRUD functionality, allowing users to add, edit, delete, and filter student records, and communicates with a JSON Server API to retrieve and manage data.",
    techStack: ["HTML", "ReactJS", "ChakraUI", "TailwindCSS"],
    coverImage: CoverStudentPortal,
    coverAltText: "ruangguru Student Portal Cover",
    links: [
      {
        type: "Github",
        url: "https://github.com/daffafaiqhs/student-portal",
        restriction: undefined,
      },
      {
        type: "Demo",
        url: "https://drive.google.com/file/d/1Bpr3n178F14UltxffcNBhWI8E20LlRrT/view?usp=sharing",
        restriction: undefined,
      },
    ],
  },
];
