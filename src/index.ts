import { Program, ICommand } from "web-cli-interpreter";

const version = "1.0.0";

export const Todo = new Program({
    indentifier: {
        name: "todo",
    },
    version,
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
                        v${version}
                    `);
            },
        },
    ],
});
