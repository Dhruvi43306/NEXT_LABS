"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type product = {
  product_id:number
  name:string
  price:number
  category:string
  image:string
  description:string
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params  
   const [data,setdata] = useState<product | null>(null)
  const router = useRouter()
  useEffect(()=>{
    if(!id) return
    fetch(`http://localhost:3000/Lab23/api/products/${id}`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("Failed to fetch product")
      }
      return res.json()
    })
    .then((res)=>{
      if(res && res.data){
        setdata(res.data)
      }
    })
    .catch((err)=>{
      console.error("Fetch Error:", err)
    })

  },[id])

  if(!data){
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        Loading product...
      </div>
     
    )
  }
  else{
    console.log("Data are Printend")
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <main className="max-w-6xl mx-auto p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <div className="bg-gray-100 w-full aspect-square rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-200">

            {data.image && (
              <img 
                src={data.image} 
                alt="product"
                className="w-full h-full object-cover rounded-lg"
              />
            )}

            <p className="text-gray-400 mt-4 font-medium uppercase tracking-widest text-sm">
              image placeholder
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-5">
              
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                Product Name: {data.name}
              </h1>

              <div>
                <label className="block font-bold text-gray-700">
                  Product ID: {data.product_id}
                </label>    
              </div>

              <div className="mb-4 text-sm mt-1.5">
                <span className="text-gray-500">Category: </span>
                <span className="text-blue-600 font-medium">
                  {data.category}
                </span>
              </div>

              <div>
                <label className="block font-bold text-gray-700">
                  Description
                </label>
                <div className="text-gray-600 text-sm mt-2">
                  {data.description}
                </div>
              </div> 
           
              <div className="text-sm mb-5">
                <span className="text-gray-500">Added On: </span>
                <span className="text-blue-600 font-mono">2026-02-11</span>
              </div>

              <div className="text-2xl font-bold text-gray-800 mb-4">
                Product Price: {data.price}
              </div>
            
              <button 
                className="bg-[#b91010] hover:bg-[#960505] text-white px-8 py-3 rounded-lg font-bold flex items-center gap-3 transition transform active:scale-95 shadow-lg"
                onClick={()=>{
                  fetch(`http://localhost:3000/Lab23/api/products/${id}`,{
                    method:"DELETE",
                  })
                  .then((res)=>{
                    if(!res.ok){
                      throw new Error("Delete failed")
                    }
                    return res.text()
                  })
                  .then(()=>{
                    router.push("/Lab23/products")
                  })
                  .catch((err)=>{
                    console.error("Delete Error:", err)
                  })
                }}
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;