'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-bg text-text-secondary font-mono">
      <div className="flex flex-col items-center gap-2">
        <span className="text-accent-red text-xs tracking-widest uppercase">
          System Error
        </span>
        <h1 className="text-4xl font-bold text-text">Something went wrong</h1>
        <p className="text-sm text-text-secondary">
          Failed to load seismic data. The service may be unavailable.
        </p>
      </div>
      <button
        onClick={reset}
        className="border border-border px-4 py-2 text-xs tracking-widest uppercase hover:border-accent-blue hover:text-accent-blue transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
