import users from "@/app/Lab21/EXTRA_LAB/data1/users";

export default async function AdminProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = Number(id);
  
  const customer = users.find((u) => u.id === userId && u.role === "Coustomer");

  if (!customer) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">User Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* LEFT SIDE: Image + Primary Info (Name/Email) */}
        <div className="w-full md:w-[350px] bg-slate-50/50 border-r border-slate-100 p-10 flex flex-col">
          {/* Image at Top Left */}
          <div className="relative w-32 h-32 md:w-44 md:h-44 mb-8">
            <img 
              src={customer.image} 
              alt={customer.name}
              className="w-full h-full object-cover rounded-[2.5rem] shadow-xl border-4 border-white" 
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Identity below Image */}
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">Full Name</p>
              <h1 className="text-3xl font-black text-slate-900 leading-tight">{customer.name}</h1>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Corporate Email</p>
              <p className="text-sm font-bold text-slate-600 break-all">{customer.email}</p>
            </div>

            <div className="pt-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">System Role</p>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-full uppercase tracking-wider">
                Authorized Customer
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Secondary Information at the Top */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Field: Registry ID */}
            <div className="group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Registry ID</label>
              <div className="text-xl font-mono font-bold text-slate-800 bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
                #MGR-00{customer.id}
              </div>
            </div>

            {/* Field: Phone */}
            <div className="group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Contact Line</label>
              <div className="text-xl font-bold text-slate-800 bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
                {customer.phone}
              </div>
            </div>

            {/* Field: Address (Spans across) */}
            <div className="md:col-span-2 group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Primary Location</label>
              <div className="text-lg font-medium text-slate-600 bg-slate-50 p-6 rounded-3xl border border-transparent group-hover:border-blue-100 group-hover:bg-white transition-all">
                {customer.address}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
               <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Last Activity</p>
               <p className="text-xs font-bold text-slate-500">Just Now • Online</p>
            </div>
            <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 shadow-lg transition-all active:scale-95">
              Contact Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}