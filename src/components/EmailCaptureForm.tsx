'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query'
import { apiRequest } from '@/lib/queryClient'

interface EmailCaptureFormProps {
  onEmailSubmitted: (email: string) => void
}

export default function EmailCaptureForm({ onEmailSubmitted }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const subscriptionMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest('POST', '/api/subscribe', { email })
      return await response.json()
    },
    onSuccess: (data) => {
      onEmailSubmitted(email)
      toast({
        title: "Welcome to the journey",
        description: "Thank you for joining us",
      })
    },
    onError: (error: any) => {
      console.error('Email subscription error:', error)
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      })
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      })
      return
    }

    subscriptionMutation.mutate(email)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="relative">
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-background/10 backdrop-blur border-primary/30 text-foreground placeholder:text-foreground/60 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          data-testid="input-email"
          disabled={subscriptionMutation.isPending}
        />
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
      
      <Button
        type="submit"
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        disabled={subscriptionMutation.isPending}
        data-testid="button-submit"
      >
        {subscriptionMutation.isPending ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
            Joining...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span>Start your journey</span>
            <span className="text-lg">→</span>
          </div>
        )}
      </Button>
    </form>
  )
}
