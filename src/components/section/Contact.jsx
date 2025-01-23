import { FiArrowUpRight } from "react-icons/fi";
import { LeftContactBg, RightContactBg } from "../../assets";
import { motion } from "motion/react";

export function Contact() {
  const contactList = [
    {
      name: "Email",
      link: "mailto:daffafaiqhs@gmail.com",
    },
    {
      name: "Github",
      link: "https://github.com/daffafaiqhs",
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/daffafaiqhs",
    },
  ];

  return (
    <section className="relative overflow-hidden sm-md:w-sm-md md:w-auto 2xl:w-2xl">
      <LeftContactBg className="absolute -start-14 -top-16 size-[200px] sm:-top-20 sm:size-[220px] md:-start-40 md:size-[450px] lg:-start-56 lg:size-[600px] xl:-start-28 2xl:-start-14 2xl:-top-9" />
      <RightContactBg className="end absolute -bottom-16 -end-16 size-[250px] rotate-[60deg] sm:-bottom-20 sm:-end-20 sm:size-[270px] md:-bottom-40 md:-end-40 md:size-[500px] md:rotate-[50deg] lg:-bottom-20 lg:-end-48 lg:size-[600px] lg:rotate-0 xl:-bottom-36 xl:-end-32 xl:size-[700px] 2xl:-end-16" />
      <div className="flex flex-col items-center justify-center overflow-hidden py-40 text-center md:gap-2">
        <h1 className="text-lg font-bold sm:text-xl lg:text-2xl xl:text-3xl">
          Let's Stay Connected!
        </h1>
        <h2 className="text-sm font-thin sm:text-base lg:text-lg xl:text-xl">
          I'm open to chat, collaborate, or just say hi.
        </h2>
        <div className="flex gap-4 py-7">
          {contactList.map((contact, index) => (
            <motion.a
              key={index}
              className="flex gap-1 rounded-full bg-white px-2 py-3 text-sm font-thin sm:px-4 lg:text-base"
              href={contact.link}
              target="blank"
              whileHover={{
                backgroundColor: "#FF933F",
                color: "#FFF",
              }}
            >
              <p>{contact.name}</p>
              <div className="mt-1">
                <FiArrowUpRight />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
