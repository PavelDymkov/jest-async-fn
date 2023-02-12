import {
    assets,
    badge,
    BadgeType,
    git,
    npmPackagr,
    packageJSON,
    publish,
    test,
    tsc,
    version,
} from "npm-packagr";

const project = require("./package.json").name;

npmPackagr({
    pipeline: [
        tsc(),

        tsc({ project: "test-src/tsconfig.json", outDir: "test" }),

        test(),

        badge(BadgeType.Test),
        badge(BadgeType.License),

        git("commit", project),

        version("patch", { commitHooks: false }),

        git("commit", project),
        git("push"),

        assets("README.md"),

        packageJSON(packageJson => {
            packageJson.main = "jest-async-fn.js";

            delete packageJson.devDependencies;
            delete packageJson.scripts;
        }),

        publish({ account: "paveldymkov", email: "dymkov86@gmail.com" }),
    ],
});
