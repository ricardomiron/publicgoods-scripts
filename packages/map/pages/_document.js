import Document, {Html, Head, Main, NextScript} from "next/document";
import fs from "fs";
import path from "path";

// read and place html files generated by publicgoods-scripts/packages/automation/index.js
const head = fs.readFileSync(path.join(process.cwd(), "public/head.html"), "utf8");
const navbar = fs.readFileSync(path.join(process.cwd(), "public/navbar.html"), "utf8");
const footer = fs.readFileSync(path.join(process.cwd(), "public/footer.html"), "utf8");
const scripts = fs.readFileSync(path.join(process.cwd(), "public/scripts.html"), "utf8");
const templateClassName = fs.readFileSync(
  path.join(process.cwd(), "public/templateClassName.txt"),
  "utf8"
);
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <html dangerouslySetInnerHTML={{__html: head}} />
        </Head>
        <body className={templateClassName}>
          <div id="page" dangerouslySetInnerHTML={{__html: navbar}} />
          <Main />
          <NextScript />
          <footer id="footer" dangerouslySetInnerHTML={{__html: footer}} />
          <html dangerouslySetInnerHTML={{__html: scripts}} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
