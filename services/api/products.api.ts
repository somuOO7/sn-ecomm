import { db } from "@/config/firebaseConfig";
import { Product } from "@/models/Product";
import { useProduct } from "@/stores/productStore";
import { collection, getDocs, query } from "firebase/firestore";

export const getProducts = async () => {
  const productCollection = collection(db, "products");
  const q = query(productCollection);
  const { products, setProducts } = useProduct.getState();

  try {
    if (products.length > 0) {
      console.log("Using cached products data:", products);
    } else {
      const data = await getDocs(q);
      const products: Product[] = data.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        price: doc.data().price,
        imageUrl: doc.data().imageUrl,
      }));

      setProducts(products);

      console.log("Using API products data:", products);
    }
  } catch (error) {
    console.log("Error fetching products: ", error);
  }
};
