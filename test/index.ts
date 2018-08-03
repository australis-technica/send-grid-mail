import { join, resolve } from "path";
import renderTemplate, {templatesPath } from "../src/render-template";
/** */
describe(require(join(__dirname, "../package.json")).name, () => {
  /** */
  it("render-templates", () => {
    const html = renderTemplate("html", { message: "hello" });
    expect(html).toBe('<div data-reactroot="">hello</div>');
    const txt = renderTemplate("text", { message: "hello1" });
    expect(txt).toBe(`hello1`);
    expect(
      renderTemplate(resolve(__dirname, "../more_templates", "text"), {
        message: "hello3"
      })
    ).toBe("hello3");    
  });
  /** */
  it("template-path", ()=>{
    process.env.MAIL_TEMPLATES_PATH = "";    
    expect(templatesPath()).toBe(resolve(__dirname, "../templates"));
    process.env.MAIL_TEMPLATES_PATH = "more_templates";    
    expect(templatesPath()).toBe(resolve(__dirname, "../more_templates"));
    process.env.MAIL_TEMPLATES_PATH = "/some_other_location";    
    expect(templatesPath()).toBe("/some_other_location");
})
});
