import { Program, ICommand } from "web-cli-interpreter";

export const VERSION = "1.0.0";

export const Todo = new Program({
    indentifier: {
        name: "todo",
    },
    version: VERSION,
    description: "Create and manage to-dos",
    methods: [
        {
            indentifier: {
                name: "version",
                abbreviation: "v",
            },
            description: "current installed version",
            execute(command: ICommand) {
                return Promise.resolve(`
                        v${VERSION}
                    `);
            },
        },
    ],
});
