import { useState } from "react";
import { CheckCircle2, Layers3 } from "lucide-react";

export default function App() {
  const [completed, setCompleted] = useState(false);

  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center gap-6 px-6 py-12">
      <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
        <Layers3 aria-hidden="true" size={20} />
        Reusable web app starter
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Start with a sound foundation.</h1>
        <p className="mt-3 max-w-xl text-slate-600">
          A small React and TypeScript application with accessible interaction and a testable baseline.
        </p>
        <button
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          type="button"
          aria-pressed={completed}
          onClick={() => setCompleted((value) => !value)}
        >
          {completed ? <CheckCircle2 aria-hidden="true" size={18} /> : null}
          {completed ? "Baseline checked" : "Check the baseline"}
        </button>
        <p className="mt-3 text-sm text-slate-600" role="status" aria-live="polite">
          {completed ? "Interaction works. Add your product requirements next." : "The starter is ready for your first feature."}
        </p>
      </section>
    </main>
  );
}
