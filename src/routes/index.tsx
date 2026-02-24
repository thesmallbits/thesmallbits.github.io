import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "thesmallbits" }],
    }),
});

function RouteComponent() {
    return (
        <div className="p-3">
            <Link to="/blogs">Blogs</Link>
        </div>
    );
}
