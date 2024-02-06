export default function Button({ text }) {
  return <div>
    <button
      type="button"
      className="rounded-md bg-black px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  </div>
}