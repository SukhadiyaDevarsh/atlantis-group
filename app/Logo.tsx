import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      <Image
        src="/logo-mark.jpg"
        alt="Atlantis Group emblem — since 1989, build the future"
        fill
        sizes="(max-width: 768px) 15vw, 300px"
        className="object-cover"
      />
    </div>
  );
}
