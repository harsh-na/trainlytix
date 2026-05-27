const PlaceholderPage = ({ title, description }) => (
  <div className="space-y-6">
    <div>
      <h1 className="font-outfit text-3xl font-bold text-slate-900">{title}</h1>
      <p className="text-sm text-slate-500 mt-1">{description}</p>
    </div>
    <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-12 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-red-50 mb-4">
        <span className="text-3xl">🔧</span>
      </div>
      <h2 className="text-xl font-semibold text-slate-900 mt-4">{title}</h2>
      <p className="text-slate-500 mt-2 max-w-md mx-auto">{description}</p>
      <p className="text-xs text-slate-400 mt-4">This section is currently under development</p>
    </div>
  </div>
);

export default PlaceholderPage;
