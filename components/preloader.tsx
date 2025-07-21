"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black mb-2">
            DEV<span className="text-blue-600">TOSIN</span>
          </h1>
          <p className="text-gray-600">Loading...</p>
        </div>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-sm text-gray-500 mt-4">{progress}%</p>
      </div>
    </div>
  )
}
