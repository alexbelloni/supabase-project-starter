npm init  
npm install --save-dev parcel  
  
your-project/  
├── dist/  
├── src/  
│   └── index.js // Your main JS file with Supabase code  
└── package.json  
  
package.json  
    "start": "parcel index.html",  
    "build": "parcel build index.html"  
  
Remove the "main" field entirely or comment it out.

npm run start  
npm run build

npm install @supabase/supabase-js

index.js as type=module because it'll use import command

generate a supabase token  
supabase new project  
supabase new table  





