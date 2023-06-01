//NodeJS: localhost:3080
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
port = 3080;
app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})

//conexio al firebase
function connection(){
  var serviceAccount = require('D:\\practicas_recus_UF3AD_I_UF2LEA\\exercisis-prova-firebase-adminsdk-zljmg-276362dfc2.json');
  var admin = require("firebase-admin");

  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
  return getFirestore(app);
}

// Exemple de passar de aqui al component, pinta en terminal i en navegador
app.get('/api/clients', (req, res) => {
  const client =  { name: "Pere", mail: "pere@gmail.com"}
  console.log(client) //Amb aixo pinta en en terminal
  res.json(client); // Amb aixo pasa el resultat al navegador
})


//Retornar dades d'un document
app.get('/api/recDocs', async (req,res) => {
  console.log('hola')
  const total = connection().collection('col·lecio1').doc('doc1');
  const document = await total.get();
  if (!document.exists){
    console.log('No existe');
  } else {
    console.log('Dades del document: ', document.data())
    res.json(document.data())
  }
});

// añadir a la coleccion un nuevo doc con campo / tmb un nuevo campo a un doc existente

app.post('/api/anadir', (req,res) => {
  const db = connection();

  const datosAdd = {
    cognom: req.body.nom
  };

  //afegir el nou doc a una nova coleccio

  // db.collection('col·lecio').add(datosAdd)
  //   .then(() => {
  //     console.log('Nova persona afegida');
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   })

  //afegir el nou doc a una coleccio existent
  db.collection('col·lecio').doc('doc1').set(datosAdd, { merge: true })
    .then(() => {
      console.log('Nueva persona agregada a una colección existente con merge: true');
    })
    .catch(error => {
      console.error(error);
    });
  res.send('Operación de añadir completada'); // Enviar respuesta al cliente
});
// })

// devolver los que sean jedi true

app.get('/api/jedis', (req, res ) => {

const personajes = [];

  connection().collection('col·lecio')
    .where('jedi', '==', true)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const personaje = doc.data();
        personajes.push(personaje);
      });
      console.log('Personatje Jedi:', personajes)

      res.json(personajes);

    });
});






