import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { app } from "./firebase.Config";


const db = getFirestore(app);

export async function obtenerProductos() {
const productosCollection = collection(db, "productos");
const productosSnapshot = await getDocs(productosCollection);
const productosList = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
return productosList;
}