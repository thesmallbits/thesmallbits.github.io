import { entries } from "@/content/registry";
export default function Blog() {
    const links = entries.map((l) => <li key={l}></li>);
    return (
        <div className="p-4">
            <ol>{links}</ol>
        </div>
    );
}
