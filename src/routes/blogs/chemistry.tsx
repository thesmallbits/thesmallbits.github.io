import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/chemistry")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>All the chemistry blogs</div>;
}
