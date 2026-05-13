import db from "../config/db"
import {ResultSetHeader } from "mysql2";

interface Product  {
  name: string,
  price: string,
  category: string,
  image: string,
  description: string,
}
export async function getAllProduct():Promise<Product[]> {
  try{
  const [data] = await db.query("SELECT * FROM products");
    return data as Product[]
}
catch(err){
  console.log("Error:",err)
  throw err
}
}
export async function getByIdProduct(id:number):Promise<Product| null>{
  try{
  const [rows] = await db.query(
  "SELECT * FROM products WHERE product_id = ?",
  [id]
);

const data = rows as Product[];

return data.length > 0 ? data[0] : null;
}
catch(err){
  console.log("Error:",err)
  throw err
}

}

export async function insertProduct(formdata:Product):Promise<ResultSetHeader> {
  try{
  const [data] = await db.query<ResultSetHeader>(
    `INSERT INTO products (name, price, category, image,description)
     VALUES (?, ?, ?, ?,?)`,
    [
      formdata.name,
      formdata.price,
      formdata.category,
      formdata.image,
      formdata.description
    ]
  );
  return data;
}
catch(err){
  console.log("Error:",err)
  throw err
}
}

export async function updateProduct(formdata:Product,id:Number):Promise<ResultSetHeader> {
  try{
  const [data] = await db.query<ResultSetHeader>(
    `UPDATE products 
     SET name = ?, price = ?, category = ?, image = ?,description =?
     WHERE product_id = ?`,
    [
      formdata.name,
      formdata.price,
      formdata.category,
      formdata.image,
      formdata.description,
      id
    ]
  );
  return data
}
catch(err){
  console.log("Error:",err)
  throw err
}
}

export async function deleteProduct(id:Number):Promise<ResultSetHeader> {
  try{
  const [data] = await db.query<ResultSetHeader>(
    "DELETE FROM products WHERE product_id = ?",
    [id]
  );
  return data
}
catch(err){
  console.log("Error:",err)
  throw err
}
}


