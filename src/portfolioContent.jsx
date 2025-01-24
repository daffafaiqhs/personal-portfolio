import { RuangguruLogo, UPNLogo } from "./assets/logo";
import * as certificate from "./assets/certificate";
import * as techLogo from "./assets/logo/tech";
import * as projectImage from "./assets/projects";

export const personalInfo = {
  email: "mailto:daffafaiqhs@gmail.com",
  github: "https://github.com/daffafaiqhs",
  linkedin: "https://linkedin.com/in/daffafaiqhs",
};

export const about_IntroductionMessage = [
  <>
    I'm just here to make websites that{" "}
    <span className="font-bold text-brand-orange">don't crash</span> (too often)
    and figure out why my{" "}
    <span className="font-bold text-brand-orange">React useEffect</span> is
    running <span className="font-bold text-brand-orange">too many times</span>{" "}
    when I only wanted it{" "}
    <span className="font-bold text-brand-orange">once</span>.
  </>,
  <>
    Most of the times, I'm caught between{" "}
    <span className="font-bold text-brand-orange">JavaScript</span> telling me
    my function is{" "}
    <span className="font-bold text-brand-orange">not defined</span>—even though
    I <span className="font-bold text-brand-orange">defined</span> it a minute
    ago and <span className="font-bold text-brand-orange">Go</span> complaining
    because a function returned{" "}
    <span className="font-bold text-brand-orange">two values</span> when I only
    asked for <span className="font-bold text-brand-orange">one</span>.
  </>,
  <>
    Hey there! I'm a{" "}
    <span className="font-bold text-brand-orange">
      3rd-year Informatics student
    </span>{" "}
    from UPN Veteran Jawa Timur who's diving headfirst into the world of web
    development. My journey has been a rollercoaster of{" "}
    <span className="font-bold text-brand-orange">
      exciting projects and endless learning
    </span>
    . My dream is to create web applications that are as reliable as my matcha
    addiction.
  </>,
  <>
    Hiyaa! I'm a{" "}
    <span className="font-bold text-brand-orange">
      3rd-year Informatics student
    </span>{" "}
    from UPN Veteran Jawa Timur exploring the exciting world of web development.
    The journey of becoming a fullstack developer is{" "}
    <span className="font-bold text-brand-orange">never linear</span>, but it's
    always <span className="font-bold text-brand-orange">rewarding</span>.
    Fueled by curiosity, creativity, and an occasional cup of mathca, I'm
    excited to keep learning, building, and hopefully avoiding those late-night{" "}
    <span className="font-bold text-brand-orange">debugging marathons!</span>
  </>,
  <>
    Greetings! I'm a{" "}
    <span className="font-bold text-brand-orange">
      3rd-year Informatics student
    </span>{" "}
    from UPN Veteran Jawa Timur on an adventure through the world of web
    development. I'm passionate about creating{" "}
    <span className="font-bold text-brand-orange">web applications</span> that
    are both{" "}
    <span className="font-bold text-brand-orange">
      functional and enjoyable
    </span>{" "}
    to use. Whether it's{" "}
    <span className="font-bold text-brand-orange">
      designing interactive user interfaces
    </span>
    , building{" "}
    <span className="font-bold text-brand-orange">efficient backends</span>, or
    spending way too long trying to figure out why my{" "}
    <span className="font-bold text-brand-orange">API</span> insists on
    returning a <span className="font-bold text-brand-orange">404</span> when
    the resource is definitely there, I'm always up for the challenge. For me,
    development isn't just about writing code; it's about creating tools and
    experiences that{" "}
    <span className="font-bold text-brand-orange">
      genuinely make a difference
    </span>{" "}
    for users while making new friends along the way.
  </>,
];

export const experiences_EducationalExperience = [
  {
    organization: "PT. Ruang Raya Indonesia (Ruangguru)",
    organizationLogo: <RuangguruLogo />,
    duration: "9 Sep 2024 - 31 Dec 2024",
    programName:
      "Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis",
    description: (
      <>
        For four months, I participated in the{" "}
        <b>Independent Certified Study Program</b> under the Kampus Merdeka
        initiative, organized by the Ministry of Education, Culture, Research,
        and Technology. One of the program's partners, PT. Ruang Raya Indonesia
        (Ruangguru), hosted the Ruangguru CAMP program. Through this program, I
        delved into the{" "}
        <b>Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis</b>{" "}
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
  },
  {
    organization: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    organizationLogo: <img src={UPNLogo} alt="Logo UPN Jawa Timur" />,
    duration: "2022  - NOW",
    programName: "Informatics Program Study",
    description: "My learning focus includes:",
    skillsAcquired: [
      "Studied subjects like Pancasila, Agama Islam, Bahasa Indonesia, Bahasa Inggris, Kewarganegaraan, and Bela Negara to develop strong ethical values and effective communication abilities.",
      "Studied subjects like Matematika Komputasi, Aljabar Linier & Matrik, and Matematika Diskrit to build a solid mathematical foundation for problem-solving.",
      "Learned the basics of computing through subjects like Arsitektur Komputer, Sistem & Teknologi Informasi, and Sistem Operasi.",
      "Mastered programming skills through Algoritma & Pemrograman, Pemrograman Lanjut, Pemrograman Web, and Pemrograman Berorientasi Objek.",
      "Developed expertise in Pemrograman Web, Kecerdasan Buatan, Jaringan Komputer, Desain Antarmuka, and Rekayasa Perangkat Lunak.",
      "Studied data management and analysis through subjects like Struktur Data, Basis Data, and Basis Data Lanjut.",
      "Enhanced leadership and entrepreneurial skills through Kewirausahaan, Kepemimpinan, and Etika & Kompetensi Informatika.",
      "Learned systems and design through subjects like Analisis & Desain Sistem.",
    ],
  },
];

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
  BootstrapLogo: techLogo.BootstrapLogo,
  GolangLogo: techLogo.GolangLogo,
  PostgreSQLLogo: techLogo.PostgreSQLLogo,
  VscLogo: techLogo.VscLogo,
  GithubLogo: techLogo.GithubLogo,
  PostmanLogo: techLogo.PostmanLogo,
  FigmaLogo: techLogo.FigmaLogo,
  LaravelLogo: techLogo.LaravelLogo,
  HuggingFaceLogo: techLogo.HuggingFaceLogo,
};

export const projects_ProjectList = [
  {
    title: "Personal Portfolio v1.0",
    description:
      "This portfolio introduces my journey as an informatics student, offering a detailed overview of the skills, projects, and experiences I've gained throughout my academic and practical journey.",
    tech: ["HTML", "ReactJS", "TailwindCSS"],
    image: projectImage.CoverPersonalPortfolio,
    imageALT: "personal portfolio cover",
    link: { github: "a", demo: "a" },
  },
  {
    title: "IONS: The Gen-Z Way to Manage Electricity",
    description:
      "As part of the final project, the task involved creating a smart home energy management system (IONS) to help households manage their energy consumption more wisely and effectively, powered by Artificial Intelligence.",
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
    link: { github: "a", demo: "a" },
  },
  {
    title: "Ruangguru Student Portal",
    description:
      "As part of the final course project, the task involved creating a Student Portal to help manage student data efficiently, with features like adding, editing, deleting, and filtering information.",
    tech: ["HTML", "ReactJS", "ChakraUI", "TailwindCSS"],
    image: projectImage.CoverStudentPortal,
    imageALT: "ruangguru student portal cover",
    link: { github: "a", demo: "a" },
  },
];
