import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/$")({
    component: RouteComponent,
});

function RouteComponent() {
    const { _splat } = Route.useParams();
    return <div>{_splat} not found</div>;
}
