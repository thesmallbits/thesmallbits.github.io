import { Link } from "@tanstack/react-router";
import { entries } from "@/content/registry";
export default function Blog() {
    const links = entries.map((l) => (
        <li key={l}>
            <Link
                to="/blogs/$blog"
                params={{ blog: l.slice(l.lastIndexOf("/") + 1) }}
            >
                {l}
            </Link>
        </li>
    ));
    return (
        <div className="p-4">
            <ol>{links}</ol>
        </div>
    );
}
