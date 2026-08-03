import clsx from "clsx";
import { DefaultNameLogo } from "../../assets/logo";
import { footerEndingWords, footerStartWords } from "../../content";
import { useState } from "react";

export function Footer(props: React.ComponentProps<"section">) {
  const [randomSentence] = useState(() => {
    const start =
      footerStartWords[Math.floor(Math.random() * footerStartWords.length)];

    const ending =
      footerEndingWords[Math.floor(Math.random() * footerEndingWords.length)];

    return `${start} ${ending}`;
  });

  return (
    <section
      className={clsx("flex flex-col gap-4 py-8 sm-md:w-sm-md md:w-auto md:!flex-row md:justify-between 2xl:w-2xl ", props.className)}
    >
      <div>
        <div className="flex items-center justify-center gap-1 text-xs font-light md:justify-start">
          &copy;<DefaultNameLogo className="h-[14px]" />{" "}
          {new Date().getFullYear()}. All Rights Reserved.
        </div>
        <p className="text-xs font-light">
          Made with {randomSentence}
        </p>
      </div>
      <div>
        <p className="text-center text-xs font-light md:text-right">
          Illustration by:{" "}
          <a className="underline" href="https://freepik.com" target="blank">
            freepik.com
          </a>
        </p>
        <p className="text-center text-xs font-light md:text-right">
          Last updated on July 28, 2026.
        </p>
      </div>
    </section>
  );
}
