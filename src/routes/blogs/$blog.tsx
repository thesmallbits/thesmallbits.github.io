import { MDXFromComponent } from "@d1vij/jassm";
import { cn } from "@d1vij/shit-i-always-use";
import { createFileRoute } from "@tanstack/react-router";

import {
    RegistryKeySchema,
    type RegistryType,
    registry,
} from "@/content/registry";
import { stylemap } from "@/styles/mdx.stylesmap";

export const Route = createFileRoute("/blogs/$blog")({
    component: RouteComponent,
    loader: ({ location }) => {
        RegistryKeySchema.parse(location.pathname);
        return registry[location.pathname as keyof RegistryType];
    },
    head: (p) => ({
        meta: [{ title: p.params.blog }],
    }),
});

function RouteComponent() {
    const Component = Route.useLoaderData();
    return (
        <div className={cn("flex")}>
            {/*sidebar*/}
            <section
                className={cn(
                    "primary-border",
                    "grow bg-light-secondary p-4",
                    "hidden md:block",
                )}
            >
                aasdasdas
            </section>
            <section
                className={cn(
                    "w-full overflow-scroll p-4 pl-8 font-[2px] font-serifed",
                )}
            >
                <MDXFromComponent
                    styles={stylemap}
                    SourceComponent={Component}
                    fallback={<div>Loading</div>}
                />
            </section>
        </div>
    );
}
