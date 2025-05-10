"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const newProgress = oldProgress + Math.floor(Math.random() * 10) + 5
        return Math.min(newProgress, 100)
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md px-4">
        <div className="flex items-center justify-center mb-8">
          <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#f0f]">
            DEV<span className="text-white">TOSIN</span>
          </span>
        </div>

        <div className="w-full bg-gray-900 rounded-full h-2.5 mb-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#0ff] to-[#f0f] h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs font-mono text-gray-400">Loading assets...</span>
          <span className="text-xs font-mono text-[#0ff]">{progress}%</span>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm animate-pulse">Building digital experiences</p>
        </div>
      </div>
    </div>
  )
}
