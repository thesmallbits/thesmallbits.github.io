import { cn } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { stylemap } from "@/styles/mdx.stylesmap";

export type ElementProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>;
export function Anchor(props: ElementProps<"a">) {
    const selfOrigin = useMemo(() => new URL(window.location.href).origin.toString(), []);
    const [target] = useState<"_self" | "_blank">(() => {
        const href = props.href;

        if (href?.match(/^#.*/)) {
            return "_self";
        }
        const targetOrigin = new URL(props.href ?? "").origin.toString();
        return targetOrigin === selfOrigin ? "_self" : "_blank";
    });

    console.log(props.href);

    if (target === "_self") {
        return (
            <Link hash={props.href?.slice(1)} to="." className={cn(stylemap.anchor)} target="_self">
                {props.children}
            </Link>
        );
    } else
        return (
            <a className={stylemap.anchor} href={props.href} target="_blank">
                {props.children}
            </a>
        );
}
