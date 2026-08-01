import { GSILogo, RuangguruLogo, UPNLogo, BNSPLogo } from "./assets/logo";
import * as certificate from "./assets/certificate";
import * as images from "./assets/images";
import * as techLogo from "./assets/logo/tech";
import * as projectImage from "./assets/projects";

export const personalInfo = {
  email: "mailto:daffafaiqhs@gmail.com",
  github: "https://github.com/daffafaiqhs",
  linkedin: "https://linkedin.com/in/daffafaiqhs",
};

export const about_IntroductionMessage = [
  <>
    I'm a fresh Informatics graduate based in{" "}
    <span className="font-bold text-brand-orange">Surabaya, Indonesia</span>,
    passionate about building{" "}
    <span className="font-bold text-brand-orange">web</span>,{" "}
    <span className="font-bold text-brand-orange">mobile</span>,{" "}
    <span className="font-bold text-brand-orange">backend</span>, and{" "}
    <span className="font-bold text-brand-orange">AI</span> solutions.
  </>,

  <>
    Hello! I'm a fresh Informatics graduate based in{" "}
    <span className="font-bold text-brand-orange">Surabaya, Indonesia</span>,
    where I spend most of my time turning ideas into{" "}
    <span className="font-bold text-brand-orange">web</span>,{" "}
    <span className="font-bold text-brand-orange">mobile</span>,{" "}
    <span className="font-bold text-brand-orange">backend</span>, and{" "}
    <span className="font-bold text-brand-orange">AI</span> applications that
    are built to solve real problems.
  </>,

  <>
    Hey there! I'm a fresh Informatics graduate from UPN Veteran Jawa Timur
    based in{" "}
    <span className="font-bold text-brand-orange">Surabaya, Indonesia</span>{" "}
    with a passion for software engineering. I enjoy building{" "}
    <span className="font-bold text-brand-orange">modern web applications</span>
    , creating{" "}
    <span className="font-bold text-brand-orange">
      cross platform mobile apps
    </span>
    , developing{" "}
    <span className="font-bold text-brand-orange">backend services</span>, and
    exploring{" "}
    <span className="font-bold text-brand-orange">artificial intelligence</span>{" "}
    through practical projects. Along the way, I've worked with{" "}
    <span className="font-bold text-brand-orange">
      React, React Native, Flutter, Go, FastAPI, TensorFlow,
    </span>{" "}
    and more .
  </>,

  <>
    I’m a{" "}
    <span className="font-bold text-brand-orange">
      fresh Informatics graduate
    </span>{" "}
    based in{" "}
    <span className="font-bold text-brand-orange">Surabaya, Indonesia</span>. I
    have an unhealthy habit of noticing when a button is one pixel off, an
    animation feels too fast, or a layout just doesn't look right. While I enjoy
    building{" "}
    <span className="font-bold text-brand-orange">
      web, mobile, backend, and AI
    </span>{" "}
    applications, what I enjoy even more is refining them until they feel
    natural to use. Outside of coding, I'm always exploring new technologies,
    experimenting with side projects, and finding better ways to build software
    that people genuinely enjoy using.
  </>,

  <>
    Greetings! I'm a fresh Informatics graduate based in{" "}
    <span className="font-bold text-brand-orange">Surabaya, Indonesia</span>,
    with a passion for building complete software solutions . I enjoy taking an
    idea from the first sketch to a finished product by combining{" "}
    <span className="font-bold text-brand-orange">
      intuitive user interfaces
    </span>
    ,{" "}
    <span className="font-bold text-brand-orange">
      reliable backend systems
    </span>
    ,{" "}
    <span className="font-bold text-brand-orange">
      cross platform mobile applications
    </span>
    , and{" "}
    <span className="font-bold text-brand-orange">AI-powered features</span>.
    While I enjoy solving technical challenges, I probably spend just as much
    time refining the small details, polishing interactions, improving
    responsiveness, and making sure an application feels as good as it
    functions. To me, great software isn't measured only by{" "}
    <span className="font-bold text-brand-orange">clean code</span>, but by how
    naturally people can use it. I'm always excited to learn new technologies,
    collaborate with others, and keep building products that create a{" "}
    <span className="font-bold text-brand-orange">meaningful impact</span>.
  </>,
];

export const experiences = {
  work_experiences: [
    {
      organization: "PT. Greatsoft Solusi Indonesia",
      organizationLogo: (
        <img src={GSILogo} alt="Logo PT. Greatsoft Solusi Indonesia" />
      ),
      duration: "Feb 2025 - May 2025",
      additionalDurationInfo: "",
      programName: "Software Developer",
      additionalInfo: "Internship",
      description: (
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
        </>
      ),
      skillsAcquired: [
        "Developed cross platform mobile applications using Flutter with a focus on building responsive and maintainable user interfaces.",
        "Designed user interfaces and translated UI/UX designs into functional mobile screens using Figma and Flutter.",
        "Integrated RESTful APIs using the Dio library to fetch, send, and synchronize application data.",
        "Implemented local data persistence using SQLite for offline storage and efficient data management.",
        "Built and maintained application features including dashboards, monitoring modules, and digital forms.",
        "Applied state management, asynchronous programming, and error handling to ensure smooth application performance.",
        "Collaborated with team members using Git and participated in the software development lifecycle, including feature development, testing, and debugging.",
      ],
      attachments: [images.LastDayGSI, certificate.GSICert],
    },
    {
      organization: "PT. Ruang Raya Indonesia (Ruangguru)",
      organizationLogo: <RuangguruLogo />,
      duration: "9 Sep 2024 - 31 Dec 2024",
      additionalDurationInfo: "",
      programName: "Mentor Assistant",
      additionalInfo: "",
      description: (
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
        </>
      ),
      skillsAcquired: [
        "Facilitated technical discussions and troubleshooting sessions, helping mentees debug issues and strengthen their problem solving skills.",
        "Reviewed mentees' projects and source code, providing constructive feedback to improve code quality, best practices, and overall understanding.",
        "Monitored mentees' learning progress, identified challenges they encountered, and reported updates to the Ruangguru team to ensure appropriate guidance and support.",
      ],
      attachments: [
        images.AsmenSessionRuangguru,
        certificate.AsmenCert,
        certificate.RekomendasiAsmen,
      ],
    },
  ],
  educations: [
    {
      organization: "Universitas Pembangunan Nasional Veteran Jawa Timur",
      organizationLogo: <img src={UPNLogo} alt="Logo UPN Jawa Timur" />,
      duration: "2022  - 2026",
      programName: "Bachelor of Informatics",
      additionalInfo: "Grade 3.92 out of 4.00",
      description: "My learning focus includes:",
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
      organization: "PT. Ruang Raya Indonesia (Ruangguru)",
      organizationLogo: <RuangguruLogo />,
      duration: "9 Sep 2024 - 31 Dec 2024",
      programName:
        "Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis",
      additionalInfo: "Grade 99.01 out of 100",
      description: (
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
        </>
      ),
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
        images.FPPresentationRuangguru,
        certificate.RuangguruCert,
        images.SuratKelulusanRuangguru,
        // certificate.KeterampilanIntiCert,
        // certificate.RPLCert,
        // certificate.FrontendDasarCert,
        // certificate.ReactCert,
        // certificate.GolangCert,
        // certificate.BasisDataCert,
        // certificate.KecerdasanBuatanCert,
      ],
    },
  ],
  certifications: [
    {
      organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
      organizationLogo: (
        <img src={BNSPLogo} alt="Logo Badan Nasional Sertifikasi Profesi" />
      ),
      duration: "",
      additionalDurationInfo: "",
      programName: "Junior Web Programmer",
      additionalInfo: "",
      description: (
        <>
          Successfully obtained the Junior Web Programmer professional
          certification issued by the Badan Nasional Sertifikasi Profesi (BNSP),
          demonstrating competency in fundamental web development concepts and
          industry standard programming practices. The certification validates
          my ability to develop web applications by applying software
          development principles, implementing programming logic, managing
          databases, and following professional standards in accordance with
          Indonesia's national competency framework.
        </>
      ),
      skillsAcquired: [],
      attachments: [certificate.BNSPCert],
    },
  ],
};

export const experiences_EducationalExperience = [];

export const experiences_Certificates = [
  certificate.KeterampilanIntiCert,
  certificate.RPLCert,
  certificate.FrontendDasarCert,
  certificate.ReactCert,
  certificate.GolangCert,
  certificate.BasisDataCert,
  certificate.KecerdasanBuatanCert,
  certificate.AsmenCert,
  certificate.RuangguruCert,
  certificate.PesertaPibiti,
  certificate.BestFPPibiti,
];

export const techStack_Logo = {
  HTMLLogo: techLogo.HTMLLogo,
  CSSLogo: techLogo.CSSLogo,
  JavascriptLogo: techLogo.JavascriptLogo,
  ReactJSLogo: techLogo.ReactJSLogo,
  TailwindCSSLogo: techLogo.TailwindCSSLogo,
  ChakraUILogo: techLogo.ChakraUILogo,
  FlutterLogo: techLogo.FlutterLogo,
  // BootstrapLogo: techLogo.BootstrapLogo,
  GolangLogo: techLogo.GolangLogo,
  PostgreSQLLogo: techLogo.PostgreSQLLogo,
  MySQLLogo: techLogo.MySQLLogo,
  // VscLogo: techLogo.VscLogo,
  // GithubLogo: techLogo.GithubLogo,
  // PostmanLogo: techLogo.PostmanLogo,
  FigmaLogo: techLogo.FigmaLogo,
  // LaravelLogo: techLogo.LaravelLogo,
  PythonLogo: techLogo.PythonLogo,
  HuggingFaceLogo: techLogo.HuggingFaceLogo,
};

export const projects_ProjectList = [
  {
    title: "Browser Extension for Cyberbullying Detection",
    description:
      "This project is part of my undergraduate thesis, focusing on the development of a browser extension for Instagram that applies a machine learning based cyberbullying detection model in real time. The goal was to transform the research into a functional application, demonstrating its practicality and potential for everyday use.",
    tech: ["HTML", "CSS", "Javascript"],
    image: projectImage.CoverBrowserExtension,
    imageALT: "Cyberbullying Detection Browser Extension Cover",
    links: [
      {
        type: "github",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        locked: true,
        title: "Limited Access",
        message:
          "I'm sorry but the item you are trying to access is restricted because it contains functionality that could be misused outside its intended purpose. Please contact me below if you would like to request access to the source code.",
        provideContactButton: true
      },
      {
        type: "Demo",
        url: "https://drive.google.com/file/d/1RgwKj0udvb7iMokmtYgkn_sh7OPps2gA/view?usp=sharing",
        locked: false,
        title: "Not Published",
        message:
          "I'm sorry, but the journal article for this project has not yet been published. Please check back later.",
        provideContactButton: false
      },
      {
        type: "Journal Article",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        locked: true,
        title: "Not Published",
        message:
          "I'm sorry, but the journal article for this project has not yet been published. Please check back later.",
        provideContactButton: false
      },
    ],
  },
  {
    title: "Machine Learning for Cyberbullying Detection",
    description:
      "This undergraduate thesis develops a BiLSTM based model for bilingual cyberbullying detectionachieving an accuracy of 95.97%. The model is enhanced with LIME to provide interpretable predictions by highlighting the words or phrases that influence each prediction.",
    tech: ["Python"],
    image: projectImage.CoverModel,
    imageALT: "Cyberbullying Detection Model Cover",
    links: [
      {
        type: "github",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        locked: true,
        title: "Limited Access",
        message:
          "I'm sorry but the item you are trying to access is currently under an academic embargo. Source code access is restricted until the embargo period ends. Please contact me below for inquiries.",
        provideContactButton: true
      },
      {
        type: "Journal Article",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        locked: true,
        title: "Not Published",
        message:
          "I'm sorry, but the journal article for this project has not yet been published. Please check back later.",
        provideContactButton: false
      },
    ],
  },
  {
    title: "Personal Portfolio v1.1",
    description:
      "This portfolio showcases my journey as an aspiring Software Engineer, providing a comprehensive overview of the skills, projects, and experiences I have gained throughout my academic and professional journey.",
    tech: ["HTML", "ReactJS", "TailwindCSS"],
    image: projectImage.CoverPersonalPortfolio,
    imageALT: "personal portfolio cover",
    links: [
      {
        type: "github",
        url: "https://github.com/daffafaiqhs/personal-portfolio",
        locked: false,
      },
      {
        type: "live",
        url: "https://daffaiq.com/",
        locked: false,
      },
    ],
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "As part of the final project for the Ruangguru CAMP program, I developed IONS, a smart home energy management system that helps households monitor and optimize their energy consumption more effectively using Artificial Intelligence.",
    tech: [
      "HTML",
      "ReactJS",
      "ChakraUI",
      "PostgreSQL",
      "Golang",
      "Hugging Face",
    ],
    image: projectImage.CoverIONS,
    imageALT: "IONS: The Gen-Z Way to Manage Electricity cover",
    links: [
      {
        type: "github",
        url: "https://github.com/daffafaiqhs/ions",
        locked: false,
      },
      // {
      //   type: "live (Frontend)",
      //   url: "https://ions.daffaiq.com/",
      //   locked: false,
      // },
      {
        type: "demo",
        url: "https://drive.google.com/file/d/1x2pn_VfSvDWR_5juuSbHgDQP1Hm4FSDB/view?usp=sharing",
        locked: false,
      },
    ],
  },
  {
    title: "Ruangguru Student Portal",
    description:
      "As one of the final course project for the Ruangguru CAMP program, I built a Student Portal web application to streamline student data management. The application implements CRUD functionality, allowing users to add, edit, delete, and filter student records, and communicates with a JSON Server API to retrieve and manage data.",
    tech: ["HTML", "ReactJS", "ChakraUI", "TailwindCSS"],
    image: projectImage.CoverStudentPortal,
    imageALT: "ruangguru student portal cover",
    links: [
      {
        type: "github",
        url: "https://github.com/daffafaiqhs/student-portal",
        locked: false,
      },
      // {
      //   type: "live (Frontend)",
      //   url: "https://studentportal.daffaiq.com/",
      //   locked: false,
      // },
      {
        type: "demo",
        url: "https://drive.google.com/file/d/1Bpr3n178F14UltxffcNBhWI8E20LlRrT/view?usp=sharing",
        locked: false,
      },
    ],
  },
];
