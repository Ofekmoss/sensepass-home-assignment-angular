export class Task {
    constructor(
        public id: string,
        public title: string,
        public status: string,
        public done: boolean,
    ) {}
}