interface Product  {
  name: string,
  price: string,
  category: string,
  image: string,
  description: string,
}
import { ResultSetHeader } from "mysql2";

import { deleteProduct, getAllProduct, getByIdProduct, insertProduct, updateProduct } from "../model/product.model";
export async function listProduct(): Promise<Product[]> {
  return await getAllProduct();
}

export async function productDetail(id: number): Promise<Product | null> {
  return await getByIdProduct(id);
}

export async function createProduct(formdata: Product): Promise<ResultSetHeader> {
  return await insertProduct(formdata);
}

export async function editProduct(formdata: Product, id: number): Promise<ResultSetHeader> {
  return await updateProduct(formdata, id);
}

export async function removeProduct(id: number): Promise<ResultSetHeader> {
  return await deleteProduct(id);
}

