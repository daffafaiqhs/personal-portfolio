export function scrollToSection(sectionRef: React.RefObject<React.ComponentRef<"div"> | null>, delaySecond: number) {
    setTimeout(() => {
        sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, delaySecond * 1000);
};