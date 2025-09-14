import EmailCaptureForm from '../EmailCaptureForm';

export default function EmailCaptureFormExample() {
  const handleEmailSubmitted = (email: string) => {
    console.log('Email submitted:', email);
  };

  return (
    <div className="p-8 bg-background min-h-screen flex items-center justify-center">
      <EmailCaptureForm onEmailSubmitted={handleEmailSubmitted} />
    </div>
  );
}