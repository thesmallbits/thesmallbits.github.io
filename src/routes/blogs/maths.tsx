import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/maths")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>All the maths blogs</div>;
}
