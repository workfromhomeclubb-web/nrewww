import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://cdn.builder.io/api/v1/image/assets%2Fcd94b92507a346519724ff25cf7be75c%2F8f5bb314df634780893575e409cb290c?format=webp&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Decorative shapes removed as requested */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 min-h-[calc(100vh-9rem)] flex items-end pb-12 md:pb-16 pt-0">
        <div className="max-w-2xl mb-[5vh]">
          <p className="uppercase tracking-[0.3em] text-white/80 text-sm md:text-base">
            READY SET
          </p>
          <h1 className="mt-4 font-display leading-none text-white text-6xl sm:text-7xl md:text-8xl">
            <span className="block">CHALLENGE</span>
            <span className="block text-primary">YOUR LIMITS</span>
          </h1>
          <div className="mt-6">
            <Link
              to="/join"
              className="inline-flex rounded-full bg-primary text-primary-foreground px-7 py-3 text-base font-semibold hover:bg-primary/90 transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
        {/* Floating image clusters */}
        <div className="pointer-events-none absolute inset-0 -z-[0]">
          {/* Right-side triangle: 1 top, 2 bottom; vertically centered with text */}
          <div className="hidden md:grid absolute right-3 top-[62%] -translate-y-1/2 grid-cols-2 grid-rows-2 gap-3 items-center w-[40rem]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcd94b92507a346519724ff25cf7be75c%2F17169ce86a7943d9aa0e6d1250f0b9fe?format=webp&width=800"
              alt="Community group"
              className="col-span-2 justify-self-center h-52 w-80 object-cover rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.75)] animate-float -translate-y-3"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcd94b92507a346519724ff25cf7be75c%2F5428dc2bb56949759a31e7211d828257?format=webp&width=800"
              alt="Building front"
              className="h-48 w-72 object-cover rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.65)] animate-float [animation-delay:0.2s]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fcd94b92507a346519724ff25cf7be75c%2Fbf8089a3afe74abd9d85ea78a6ad94c8?format=webp&width=800"
              alt="Building side"
              className="h-48 w-72 object-cover rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.65)] animate-float [animation-delay:0.6s]"
            />
          </div>
        </div>
      </section>

      {/* Slider dots */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-6 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}
