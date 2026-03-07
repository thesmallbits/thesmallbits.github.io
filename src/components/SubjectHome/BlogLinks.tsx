import { useVibrate } from "@d1vij/shit-i-always-use";
import { Link } from "@tanstack/react-router";
import { useCallback } from "react";
// import type { RegistryType } from "@/content/registry";

export function BlogLink({ url }: { url: string }) {
    const vibrator = useVibrate();
    const handleClick = useCallback(() => vibrator(50), [vibrator]);
    return (
        <li>
            <Link to={url} onClick={handleClick} className="underline decoration-dotted hover:decoration-solid">
                {url}
            </Link>
        </li>
    );
}

// export type BlogLinksProps = {
//     links: ReturnType<RegistryType["getComponents"]>;
// };
// // const allBlogs = useMemo(() => {
// //     const registry = content.subject_registry;
// //     const components = registry.components;
// //     const urls = Object.keys(components) as [keyof (typeof registry)["components"]];
// //     const elms = [];
// //     for (const url of urls) {
// //         elms.push(<BlogLink url={url} key={url} />);
// //     }
// //     return elms;
// // }, [content.subject_registry]);
// export function BlogLinks({ links }: BlogLinksProps) {
//     return <ul></ul>;
// }
