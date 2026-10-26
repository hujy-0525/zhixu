# Third-party notices

The MIT license in this repository covers the project's authored application code.
Dependencies retain their own notices. npm installs the original licenses; the
static build copies licenses next to the redistributed browser bundles.

| Component | Pinned version | License | Upstream |
|---|---|---|---|
| JSZip | 3.10.1 | MIT (chosen from MIT OR GPL-3.0-or-later) | https://github.com/Stuk/jszip |
| docx-preview | 0.4.1 | Apache-2.0 | https://github.com/VolodymyrBaydalka/docxjs |
| PDF.js / pdfjs-dist | 6.4.299 | Apache-2.0 | https://github.com/mozilla/pdf.js |
| Tesseract.js | 6.0.1 | Apache-2.0 | https://github.com/naptha/tesseract.js |
| fake-indexeddb (tests) | 6.2.6 | Apache-2.0 | https://github.com/dumbmatter/fakeIndexedDB |
| jsdom (tests) | 30.1.3 | MIT | https://github.com/jsdom/jsdom |

PDF CMaps are copied with their upstream notices. Transitive dependencies are
pinned in package-lock.json and ship their own license files in node_modules.
OCR may download Tesseract core and Chinese/English trained data from upstream
CDNs on first use; this release does not vendor those trained data files.
Project demo conversations, report and diagrams are newly authored fictional data.
No employee conversations, company documents, personal cloud workspace, old Git
history, API keys, private project bindings or rollback archives are distributed.
