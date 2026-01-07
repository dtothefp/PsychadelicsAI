'use client'

import { useState, useEffect } from 'react'
import PsychedelicBackground from '@/components/PsychedelicBackground'
import EmailCaptureForm from '@/components/EmailCaptureForm'

export default function Home() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')

  // Check localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem('psychedelics-ai-email')
    if (storedEmail) {
      setSubmittedEmail(storedEmail)
      setEmailSubmitted(true)
    }
  }, [])

  const handleEmailSubmitted = (email: string) => {
    setSubmittedEmail(email)
    setEmailSubmitted(true)
    // Store in localStorage so user doesn't see form again
    localStorage.setItem('psychedelics-ai-email', email)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Psychedelic animated background */}
      <PsychedelicBackground />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {!emailSubmitted ? (
            <div className="space-y-8 animate-fade-in">
              {/* Mysterious headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight leading-tight drop-shadow-lg">
                  Psychedelics.ai
                </h1>
                <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-md">
                  Where consciousness meets code
                </p>
              </div>
              
              {/* Email capture form */}
              <div className="pt-4">
                <EmailCaptureForm onEmailSubmitted={handleEmailSubmitted} />
              </div>
              
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              {/* Thank you state */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight drop-shadow-lg">
                    Thank you for joining.
                  </h1>
                </div>
                
                <div>
                  <p className="text-xl md:text-2xl text-white/80 font-light drop-shadow-sm">
                    The path forward reveals itself through exploration.
                  </p>
                </div>
                
                {/* Email confirmation */}
                <div className="pt-2">
                  <p className="text-sm text-white/70 font-light tracking-wide drop-shadow-sm">
                    We'll reach you at{' '}
                    <span className="text-white font-medium">
                      {submittedEmail}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/20 pointer-events-none" />
    </div>
  )
}

