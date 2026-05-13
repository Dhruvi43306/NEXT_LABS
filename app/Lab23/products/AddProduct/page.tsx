'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Package, IndianRupee, Tag, Image as ImageIcon, FileText } from 'lucide-react';

type product = {
  name: string,
  price: string,
  category: string,
  image: string,
  description: string,
}

export default function AddProductPage() {

  const router = useRouter();

  const [data, setdata] = useState<product>({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",

  });
// useEffect → used for:
// page load
// dependency change
// side effects



//// load products when page opens
// useEffect(()=>{
//   fetchProducts();

// add product when user clicks submit
// const handleSubmit = ()=>{
//   addProduct();
// }

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any)=>{
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }
const handleSubmit = async (e:any)=>{
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:3000/Lab23/api/products", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log("result:",result);

    router.push("/Lab23/products");
  } catch(err){
    console.log(err);
  }

  setLoading(false);
}


  const labelClasses = "block text-sm font-medium text-gray-700 flex items-center gap-2";
  const inputClasses = "mt-2 block w-full rounded-lg border border-gray-200 bg-white p-3.5 text-sm placeholder:text-gray-400 focus:border-sky-300 focus:ring-2 focus:ring-sky-100 transition duration-150";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <header className="mb-10">
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="bg-sky-100 p-4 rounded-full text-sky-600">
                <Package size={30} />
            </div>
            <div>
                <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight">Add New Product</h1>
                <p className="text-gray-500 mt-1">Configure your product details below</p>
            </div>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="space-y-6">

              <div>
                <label htmlFor="name" className={labelClasses}>Product Name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} className={inputClasses} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className={labelClasses}><IndianRupee size={16}/> Price</label>
                  <input type="number" name="price" value={data.price} onChange={handleChange} className={inputClasses} />
                </div>

                <div>
                  <label htmlFor="category" className={labelClasses}><Tag size={16}/> Category</label>
                  <input type="text" name="category" value={data.category} onChange={handleChange} className={inputClasses} />
                </div>
              </div>

              <div>
                <label htmlFor="image" className={labelClasses}><ImageIcon size={16}/> Image URL</label>
                <input type="text" name="image" value={data.image} onChange={handleChange} className={inputClasses} />
              </div>

              <div>
                <label htmlFor="description" className={labelClasses}><FileText size={16}/> Description</label>
                <textarea name="description" rows={4} value={data.description} onChange={handleChange} className={inputClasses}/>
              </div>

            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-6">
              <h2 className="text-xl font-semibold text-gray-950 mb-5">Preview Card</h2>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                {data.image ? (
                  <img src={data.image} alt="Preview" className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon size={48}/>
                    <span className="text-sm">Image Placeholder</span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{data.name || 'Product Name'}</h3>
                  <p className="text-gray-500 text-sm mt-1">{data.description || 'Description will appear here...'}</p>
                  <div className="flex justify-between mt-4">
                    <span className="text-sky-600 font-semibold">
                      {data.price ? `₹${data.price}` : '₹0'}
                    </span>
                    <span className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {data.category || 'Category'}
                    </span>
                  </div>
                </div>
              </div>

              {/* submit button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-6 py-3 px-4 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700"
              >
                {loading ? "Adding..." : "Submit"}
              </button>

            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
