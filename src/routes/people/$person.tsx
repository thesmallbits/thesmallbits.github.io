import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/people/$person")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/people/$person"!</div>;
}
