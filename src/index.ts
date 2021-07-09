import { IProgram, Program, ICommand } from "web-cli-interpreter";

const version = "1.0.0";

export const Todo =  new Program({
    indentifier: {
        name: "todo",
    },
    version,
    description:
        "A program to get information about the curernt command line interface",
    methods: [
        {
            indentifier: {
                name: "add",
                abbreviation: "a",
            },
            description: "add todo",
            execute(command: ICommand) {
                return Promise.resolve('todo info');
            },
        },
        {
            indentifier: {
                name: "remove",
                abbreviation: "r",
            },
            description: "remove todo",
            execute(command: ICommand) {
                return Promise.resolve('todo info');
            },
        },
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
