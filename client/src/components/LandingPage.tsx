import { useState } from 'react';
import PsychedelicBackground from './PsychedelicBackground';
import EmailCaptureForm from './EmailCaptureForm';

export default function LandingPage() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleEmailSubmitted = (email: string) => {
    setSubmittedEmail(email);
    setEmailSubmitted(true);
  };

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
                <h1 className="text-5xl md:text-7xl font-light text-foreground tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Psychedelics.ai
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide">
                  Where consciousness meets code
                </p>
              </div>
              
              {/* Email capture form */}
              <div className="pt-8">
                <EmailCaptureForm onEmailSubmitted={handleEmailSubmitted} />
              </div>
              
              {/* Subtle hint */}
              <p className="text-sm text-foreground/50 font-light tracking-widest uppercase">
                Discover what lies beyond
              </p>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in">
              {/* Thank you state */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-light text-foreground tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Welcome to your journey
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-foreground/80 font-light">
                    Thank you for joining.
                  </p>
                </div>
                
                <div className="pt-4">
                  <p className="text-base text-foreground/60 font-light">
                    The path forward will be revealed to those who seek.
                  </p>
                </div>
                
                {/* Email confirmation */}
                <div className="pt-2">
                  <p className="text-sm text-foreground/40 font-light tracking-wide">
                    We'll reach you at{' '}
                    <span className="text-primary font-medium">
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
  );
}