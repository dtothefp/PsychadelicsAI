import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface EmailCaptureFormProps {
  onEmailSubmitted: (email: string) => void;
}

export default function EmailCaptureForm({ onEmailSubmitted }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual email service integration (SendGrid)
      console.log('Email submitted:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onEmailSubmitted(email);
      
      toast({
        title: "Welcome to the journey",
        description: "Thank you for joining us",
      });
    } catch (error) {
      console.error('Email submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div className="relative">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 bg-background/10 backdrop-blur border-primary/30 text-foreground placeholder:text-foreground/60 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          data-testid="input-email"
          disabled={isSubmitting}
        />
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 -z-10" />
      </div>
      
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        disabled={isSubmitting}
        data-testid="button-submit"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
            Entering...
          </div>
        ) : (
          'Enter the journey'
        )}
      </Button>
    </form>
  );
}