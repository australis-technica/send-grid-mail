import * as ReactDOMServer from "react-dom/server";
import * as React from "react";
import { resolve, join, isAbsolute } from "path";
/** */
export function templatesPath() {
  const { MAIL_TEMPLATES_PATH } = process.env;
  let baseDir = MAIL_TEMPLATES_PATH
    ? isAbsolute(MAIL_TEMPLATES_PATH)
      ? MAIL_TEMPLATES_PATH
      : join(process.cwd(), MAIL_TEMPLATES_PATH)
    : join(process.cwd(), "templates");
  return baseDir;
}
/** */
export default function renderTemplate(
  templateName: string,
  data: any
): string {
  const templatePath = isAbsolute(templateName)
    ? templateName
    : resolve(templatesPath(), templateName);
  const template: React.ComponentType = require(templatePath).default;
  return ReactDOMServer.renderToString(React.createElement(template, data));
}
