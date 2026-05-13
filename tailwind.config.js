/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    "bg-emerald-50","text-emerald-600","bg-emerald-600","hover:bg-emerald-700","border-emerald-100",
    "bg-blue-100","text-blue-600","bg-blue-600","hover:bg-blue-700","border-slate-200",
    "bg-violet-50","text-violet-600","bg-violet-600","hover:bg-violet-700","border-violet-100",
    "bg-amber-50","text-amber-600","bg-amber-600","hover:bg-amber-700","border-amber-100",
    "bg-red-50","text-red-600","bg-red-600","hover:bg-red-700","border-red-100",
  ],

  theme: { extend: {} },
  plugins: [],
};