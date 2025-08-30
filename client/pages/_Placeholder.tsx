import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-black tracking-tight mb-4">{title}</h1>
        <p className="text-white/70 mb-6">
          This page is a placeholder. Keep prompting to fill in this content.
        </p>
        <Link
          to="/"
          className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
