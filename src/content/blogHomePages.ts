import * as v from "valibot";
import { type SubjectBlogIndex, SubjectBlogIndexSchema } from "@/schemas";
import { chemistry, general, maths, physics } from "./registry";

// pls ensure the schema is valid 🙏🏻
// we have no build time checks (yet)
// and anything ooga booga will crash
// the whole thing at runtime
const index: SubjectBlogIndex = {
    chemistry: {
        title: "Chemistry",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        subject_registry: chemistry,
        hot_links: [
            {
                title: "Fischer Indole Synthesis",
                url: "/blogs/chemistry/fischer-indole-synthesis",
                summary:
                    "Eodem modo sapiens erit affectus erga amicum, quo in se ipsum, quosque labores propter suam voluptatem susciperet, eosdem suscipiet propter amici voluptatem. Quaeque de virtutibus dicta sunt, quem ad modum, quaeso, interpretaris? Sicine eos censes aut in armatum hostem impetum fecisse aut in dolore. Omnis autem privatione doloris putat Epicurus terminari summam voluptatem, ut postea variari voluptas distinguique possit, augeri amplificarique non possit. At etiam.",
            },
            {
                title: "The Beckmann rearrangement reaction",
                url: "/blogs/chemistry/beckmann-rearrangement",
                summary:
                    "Si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut ea maior sit, mediocritatem desiderent. Sive enim ad sapientiam perveniri potest, non paranda nobis solum ea, sed fruenda etiam sapientia est; sive.",
                reading_minutes: 12,
            },
        ],
    },
    maths: {
        title: "Mathematics",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        subject_registry: maths,
        hot_links: [],
    },
    physics: {
        title: "Physics",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        subject_registry: physics,
        hot_links: [],
    },
    general: {
        title: "General",
        quote: "Chemistry jaaye bhaad me, mera dhyaan to meri stree par rahega",
        quote_author: "Divij",
        subject_registry: general,
        hot_links: [],
    },
} as const;

export const subjectPageIndex = v.parse(SubjectBlogIndexSchema, index);
