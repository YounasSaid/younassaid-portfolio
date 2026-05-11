function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Gradient blob baggrund — placeholder, gøres pænere i fase 2 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[600px] rounded-full bg-accent-purple/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-40 size-[500px] rounded-full bg-accent-cyan/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 size-[400px] rounded-full bg-accent-pink/20 blur-[120px]"
      />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-sm tracking-wider text-text-muted uppercase">
          Portfolio · under bygning
        </p>
        <h1 className="mt-6 text-6xl font-bold sm:text-7xl md:text-8xl">
          <span className="gradient-text">Younas Said</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-text-muted">
          Softwareingeniørstuderende · VIA UC · Backend &amp; Machine Learning
        </p>

        <div className="glass mt-10 rounded-2xl px-6 py-4 font-mono text-sm text-text-muted">
          <span className="text-accent-cyan">$</span> npm run build — fase 1
          klar ✓
        </div>
      </section>
    </main>
  )
}

export default App
