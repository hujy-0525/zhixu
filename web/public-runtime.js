'use strict';
// No credentials or production API adapter in the public edition.
globalThis.fetch=(()=>{const native=globalThis.fetch.bind(globalThis);return (input,options)=>{const url=new URL(typeof input==='string'?input:input.url,location.href);if(url.origin===location.origin&&url.pathname.startsWith('/api/'))return Promise.resolve(new Response(JSON.stringify({configured:false,error:'公开版本不提供云端或模型接口'}),{status:200,headers:{'content-type':'application/json'}}));return native(input,options);};})();
