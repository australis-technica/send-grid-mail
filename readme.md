utility to easy send mails rendered by react with send-grid from file templates from well known location

--templates/*  

Install:

    npm i @australis/send-grid-mail

test:

    npm run build && npm test

usage: 

    import { sendMail, renderTemplate } from "@australis/send-grid-mail";
    /** 
     * change process.env.MAIL_TEMPLATES_PATH to find them somewhere else 
     * or pass an absoulte path to templateName
     */
    async function send(){
        /** "my_mail.js" is waiting in cwd()/templates  */
        const html = renderTemplate(/* templateName: */ "my_mail", { message: "Hi!" });
        await sendMail({
            to: "my@mail.no",
            subject: "Hi There",
            html
        });
    }