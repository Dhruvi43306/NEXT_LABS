"use client"
import React, { useEffect, useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { ShoppingBag, ArrowRight, Star, Heart,Save } from 'lucide-react';
import Link from 'next/link';
type product={
  product_id:number
  name:string
  description:string
  price:number
  category:string
  image:string
  
}
function ProductPage() {
  const router = useRouter()
   const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [products,setProducts] = useState <product | null>(null)
    useEffect(()=>{
        fetch("http://localhost:3000/Lab23/api/products")
        .then((res)=>res.json())
        .then((res)=>setProducts(res.data))
    },[])
  return (
    <>
     <div className="min-h-screen bg-[#F8F9FB] py-16 px-6 font-sans antialiased text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Symmetric Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">
            The <span className="text-indigo-600">Premium</span> Line
          </h1>
          <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
            Uniformity • Precision • Excellence
          </p>
          <Link href="/Lab23/products/AddProduct">
          <button type="submit" form="edit-form" className="px-5 ml-280 py-2.5 text-sm font-semibold text-white bg-blue-950 rounded-xl hover:bg-emerald-700 flex items-center gap-2 shadow-sm">
    <Save size={18} />Add Product</button></Link>
        </header>
    
        {/* Grid with Fixed Dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(products) && products.map((p) => (
            <div 
              key={p.product_id} 
              className="group bg-white rounded-[2rem] border border-slate-100 flex flex-col h-[520px] overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500"
            >
              {/* 1. Fixed Image Section (Top) */}
              <div className="relative h-60 w-full bg-slate-50 overflow-hidden border-b border-slate-50">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                    {p.category}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-300 hover:text-red-500 transition-colors shadow-sm">
                  <Heart size={16} fill="currentColor" className="text-transparent hover:text-red-500" />
                </button>
              </div>

              {/* 2. Content Section (Middle) */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold leading-tight group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-400">5.0</span>
                  </div>
                </div>
              
                <p className="text-sm text-red-400 mt-2 line-clamp-2 min-h-[40px]">
                  {p.description}
                </p>
                
                <div className="mt-auto">
                   <p className="text-[10px] font-black text-slate-300 uppercase tracking-tighter mb-1">Total Price</p>
                   <p className="text-3xl font-black tracking-tighter text-slate-900">${p.price}</p>
                </div>
              </div>

              {/* 3. Buy Now Button (Fixed Footer) */}
              <div className="px-6 pb-6 flex flex-row justify-center gap-3 ml-17.5 pt-10">
                <button 
                  className="px-6 py-2 bg-blue-400 text-white rounded-2xl hover:bg-blue-500 transition-colors shadow-sm"
                  onClick={() => router.push(`/Lab23/products/editproduct?id=${p.product_id}`)}
                >
                  EDIT
                </button>

                <button 
                  className="px-6 py-2 bg-green-400 text-white rounded-2xl hover:bg-yellow-500 transition-colors shadow-sm"
                  onClick={() => router.push(`/Lab23/products/productDetail/${p.product_id}`)}
                >
                  VIEW
                </button>
                </div>
              {/* <div className="px-6 pb-6">
                <button className="w-full bg-slate-900 text-white text-xs font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all active:scale-95 shadow-xl shadow-slate-200 group-hover:shadow-indigo-100">
                  BUY NOW <ArrowRight size={16} />
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductPage;