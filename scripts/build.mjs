import {cp,mkdir,rm,writeFile,readFile,readdir} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist/vendor',{recursive:true});await cp('web','dist',{recursive:true});
const copies=[['jszip/dist/jszip.min.js','jszip.min.js'],['jszip/LICENSE.markdown','JSZip-LICENSE.md'],['docx-preview/dist/docx-preview.min.js','docx-preview.min.js'],['docx-preview/LICENSE','DOCX-PREVIEW-LICENSE.txt'],['pdfjs-dist/build/pdf.min.mjs','pdf.min.mjs'],['pdfjs-dist/build/pdf.worker.min.mjs','pdf.worker.min.mjs'],['pdfjs-dist/cmaps','pdf-cmaps'],['pdfjs-dist/LICENSE','pdf-LICENSE.txt'],['tesseract.js/dist/tesseract.min.js','tesseract.min.js'],['tesseract.js/dist/worker.min.js','tesseract-worker.min.js'],['tesseract.js/LICENSE.md','TESSERACT-LICENSE.md']];for(const [from,to]of copies)await cp('node_modules/'+from,'dist/vendor/'+to,{recursive:true});
// Release archive is rebuilt from an explicit allowlist; never includes .git/.openai/old snapshots.
const {default:JSZip}=await import('jszip');const zip=new JSZip();
async function add(dir){for(const f of await readdir(dir,{withFileTypes:true})){const name=dir+'/'+f.name;if(f.isDirectory())await add(name);else zip.file('zhixu/'+name,await readFile(name));}}
for(const dir of ['web','scripts','tests','docs','.github'])await add(dir);
for(const file of ['README.md','LICENSE','THIRD_PARTY_NOTICES.md','package.json','package-lock.json','.gitignore','.env.example'])zip.file('zhixu/'+file,await readFile(file));
await writeFile('dist/zhixu-source.zip',await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));
console.log('Built isolated static release with licensed vendor assets.');
