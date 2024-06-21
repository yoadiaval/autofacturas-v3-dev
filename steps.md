# CREAR PROYECTO VITE
 >> npm create vite@latest project-name

 # INSTALAR MODULOS NECESARIOS 
 1. Tailwind
 >> npm install -D tailwindcss postcss autoprefixer
 >> npx tailwindcss init -p

 copiar en fichero tailwind.config.js:
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  copiar en index.js o main.jsx
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  2. Classnames
  >> npm i classnames

  3. React-pdf
   >> npm install @react-pdf/renderer --save
   URL para probar maquetación en PDF (https://react-pdf.org/repl)

  4. Firebase
   >> npm install firebase

    En *firebase.jsx*
    ```javascript 
        import { initializeApp } from "firebase/app";
        import { getFirestore } from "firebase/firestore";

        const firebaseConfig = {
        apiKey:"XXXXXX" ,
        authDomain:"XXXXXX" ,
        projectId:"XXXXXX" ,
        storageBucket:"XXXXXX" ,
        messagingSenderId: "XXXXXX",
        appId: "XXXXXX",
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        export const db = getFirestore(app);
    ```
    ## getData addData
    ```javascript
       import { collection, getDocs, addDoc } from "firebase/firestore";
       import { db } from "../firebase";

       //get
       const getClients = async()=>{
           const querySnapshot = await getDocs(collection(db, "clients"));
           const clients = querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
           setClients(clients)
          }


       //add
       const addClient = async (detailsClient) => {
             try {
               await addDoc(collection(db, "clients"), {
                 ...detailsClient,
               });
             } catch (error) {
               alert(error)
             }
             setClients([...clients, detailsClient]);
           };
    ```

    5. react-Router-dom
   >> npm i react-router-dom
   