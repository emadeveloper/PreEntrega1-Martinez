import { doc, getDoc, getDocs, getFirestore, collection} from "firebase/firestore";

const getProductsFromFirestore = async () => {
  const db = getFirestore();
  const itemsCollectionRef = collection(db, "items");
  const snapshot = await getDocs(itemsCollectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getProductFromFirestore = async (id) => {
  const db = getFirestore();
  const itemRef = doc(db, "items", id);
  const snapshot = await getDoc(itemRef);
  if (!snapshot.exists()) {
    return null;
  }
  return { id: snapshot.id, ...snapshot.data() };
};


export { getProductsFromFirestore, getProductFromFirestore };
