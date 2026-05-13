"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Pencil, IndianRupee, Tag, FileText, ArrowLeft } from 'lucide-react';

type Product = {
  name: string;
  price: number | string;
  category: string;
  image: string;
  description: string;
}

function EditProductpage() {

  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const [data,setdata] = useState<Product>({
    name:"",
    price:"",
    category:"",
    image:"",
    description:""
  })

  useEffect(()=>{
    if(!id) return

    fetch(`http://localhost:3000/Lab23/api/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
      setdata(res.data)   
    })
  },[id])

  const handleUpdate = async ()=>{
    await fetch(`http://localhost:3000/Lab23/api/products/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })

    router.push("/Lab23/products")
  }

  const labelClasses = "block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2";
  const inputClasses = "w-full rounded-xl border border-gray-200 bg-white p-3 text-sm";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto p-6">

        <header className="flex items-center gap-4 mb-10">
          <button onClick={() => router.back()}>
            <ArrowLeft />
          </button>
          <h1 className="text-3xl font-bold">Edit Product</h1>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <img 
              src={data.image || 'https://via.placeholder.com/300'} 
              className="w-full h-64 object-cover rounded-2xl mb-4" 
            />

            <input 
              type="url"
              value={data.image}
              className={inputClasses}
              onChange={(e)=>setdata({...data,image:e.target.value})}
            />
          </div>

          <div className="md:col-span-3 space-y-4">

            <input
              type="text"
              value={data.name}
              className={inputClasses}
              onChange={(e)=>setdata({...data,name:e.target.value})}
            />

            <input
              type="number"
              value={data.price}
              className={inputClasses}
              onChange={(e)=>setdata({...data,price:e.target.value})}
            />

            <input
              type="text"
              value={data.category}
              className={inputClasses}
              onChange={(e)=>setdata({...data,category:e.target.value})}
            />

            <textarea
              value={data.description}
              className={inputClasses}
              onChange={(e)=>setdata({...data,description:e.target.value})}
            />

            <button 
              type="button"
              onClick={handleUpdate}
              className="bg-emerald-600 text-white px-5 py-2 rounded-xl"
            >
              Update
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProductpage
