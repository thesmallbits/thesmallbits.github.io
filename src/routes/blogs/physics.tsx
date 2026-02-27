import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/physics")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>All the physics blogs</div>;
}
