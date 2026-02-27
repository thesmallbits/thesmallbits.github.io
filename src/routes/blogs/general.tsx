import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/general")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>All the general blogs</div>;
}
