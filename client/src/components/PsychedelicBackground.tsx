import sophisticatedBg from '@assets/thumb-2020x1400_1757871857734.jpg';

export default function PsychedelicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sophisticatedBg})` }}
      />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}