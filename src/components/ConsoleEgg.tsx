import { useRouter } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo } from "react";
import { prettyLog } from "@/lib/prettyLog";

export default function ConsoleEgg() {
    const router = useRouter();
    const joinUsAt = useMemo(() => {
        return `${window.location.origin}/#${router.buildLocation({ to: "/join-us" }).href}`;
    }, [router.buildLocation]);
    const routine = useCallback(() => {
        prettyLog("Hey There !!!", {
            color: "red",
            "font-size": "64px",
            "font-weight": "700",
        });
        prettyLog("Stop goofing around ಠ ೧ ಠ", {
            color: "lightgreen",
            "font-size": "18px",
        });
        prettyLog(
            `If you understand what's happening here, you should come join us: `,
            {
                color: "yellow",
                "font-size": "18px",
            },
        );
        prettyLog(joinUsAt, {
            color: "turquoise",
            "font-size": "18px",
        });
    }, [joinUsAt]);

    useEffect(() => {
        routine();

        const id = setInterval(routine, 300 * 1000); // every 5 minutes

        return () => clearInterval(id);
    }, [routine]);
    return null;
}
