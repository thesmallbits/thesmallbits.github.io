import { cn } from "@d1vij/shit-i-always-use";
import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

export const Route = createFileRoute("/")({
    component: RouteComponent,
    head: () => ({
        meta: [{ title: "thesmallbits" }],
    }),
});

const Hero = lazy(() => import("@/components/Hero"));
const HomeCards = lazy(() => import("@/components/HomeCards"));

function RouteComponent() {
    return (
        <div className="overflow-clip p-3">
            <Hero />

            <section className="mt-20">
                <div className={cn("mx-auto", "grid w-[90%] grid-cols-1 gap-8 md:w-[50%] md:grid-cols-2")}>
                    <HomeCards
                        title="Getting Started"
                        content="Learn the fundamentals of the project, including installation steps, required dependencies, environment configuration, and how to run the development server for the first time."
                    />

                    <HomeCards
                        title="Project Structure"
                        content="Explore how the application is organized, including the purpose of each folder, how components are structured, where business logic lives, and best practices for maintaining scalability."
                    />

                    <HomeCards
                        title="API Integration"
                        content="Understand how the frontend communicates with backend services, including making HTTP requests, handling responses, managing errors, and structuring reusable API utilities."
                    />

                    <HomeCards
                        title="Authentication"
                        content="Implement secure authentication flows such as login, signup, token handling, protected routes, session persistence, and role-based access control."
                    />

                    <HomeCards
                        title="State Management"
                        content="Manage complex application state effectively using React hooks, context, or external libraries, while maintaining performance and predictable data flow."
                    />

                    <HomeCards
                        title="Deployment"
                        content="Prepare your application for production by building optimized assets, configuring environment variables, setting up CI/CD pipelines, and deploying to hosting platforms."
                    />
                </div>
            </section>
        </div>
    );
}
