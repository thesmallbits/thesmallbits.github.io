// script to valdiate static schemas at build time
// "prebuild": "bun run src/scripts/prebuild.ts",

import { subjectPageIndex } from "../src/content/Subjects";

const tests: TestSchemas = [
    {
        name: "subject blog page index",
        what: subjectPageIndex,
        against: SubjectBlogIndexSchema,
    },
];

import { exit } from "node:process";
import chalk from "chalk";
// --------------------------------x------------------------------------- //
import * as v from "valibot";
import { SubjectBlogIndexSchema } from "@/schemas";
export function isValibotSchema(input: unknown): input is v.GenericSchema<unknown> {
    return typeof input === "object" && input !== null && Symbol.for("ValiType") in input;
}
const TestsSchema = v.array(
    v.object({
        name: v.pipe(v.string(), v.minLength(1)),
        what: v.unknown(),
        against: v.custom(isValibotSchema),
    }),
);
type TestSchemas = v.InferInput<typeof TestsSchema>;

type TestIssues<S extends v.GenericSchema> = v.SafeParseResult<S>["issues"];
function validate<O, S extends v.GenericSchema>(what: O, against: S): [true, undefined] | [false, TestIssues<S>] {
    const results = v.safeParse(against, what);
    if (results.success) {
        return [true, undefined];
    } else {
        return [false, results.issues];
    }
}

const l = console.log;
const c = chalk;
function logIssues<S extends v.GenericSchema>(issues: TestIssues<S>) {
    if (!issues) return;
    for (let idx = 0; idx < issues.length; idx++) {
        const issue = issues[idx];
        l(c.blue(`${idx + 1}. `), c.yellow(issue.type, " "), issue.input, c.yellow(issue.message));
    }
}

function main() {
    // validate the test object against its own schema
    const [status, issues] = validate(tests, TestsSchema);
    if (!status) {
        console.log(chalk.red("* Tests schema is invalid"));
        logIssues(issues);
        exit(1);
    } else {
        console.log(chalk.green("* Tests is valid"));
    }
}

main();
