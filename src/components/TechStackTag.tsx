import { techStack, type StackName } from "../content";

type TechStackTagProps = {
    name: StackName,
    logoClassName: string,
    nameClassName?: string,
}

export function TechStackTag(props: TechStackTagProps) {
    const stack = techStack[props.name];

    if (!stack) {
        return null;
    }

    return (
        <div className="flex w-fit items-center gap-2 rounded-lg p-2 text-xs">
            <stack.logo className={props.logoClassName} />
            <p className={props.nameClassName}>{props.name}</p>
        </div>
    );
}