import Image from "next/image";

export default function PsychedelicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static background image */}
      <Image
        src="/thumb-2020x1400_1757871857734.jpg"
        alt="Psychedelic background"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
