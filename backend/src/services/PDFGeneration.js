import puppeteer from "puppeteer";

const generatePDF = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(`
        
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>frontend</title>

        <style>
            h1{
                color : red;
            }
        </style>
        
    </head>
    <body class="bg-linear-to-br from-slate-900 via-purple-900 to-indigo-900">
    <h1> Hello World </h1>
    </body>
    </html>

        `, {waitUntil: ["load", "domcontentloaded", "networkidle0"]});

    await page.pdf({
        path: "output.pdf",
        format: "A4",
        printBackground: true
    })
  await browser.close();
};

export default generatePDF;
