// dialog.ts
import * as builder from 'botbuilder';
interface IResults {
    response: string;
}
export default [
    (session: builder.Session) => {
        builder.Prompts.text(session, 'What is your name?');
    },
    (session: builder.Session, results: IResults) => {
        session.endConversation(`Hello, ${results.response}`);
    }
]