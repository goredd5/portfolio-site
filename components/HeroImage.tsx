import Image from 'next/image';

interface HeroImageProps {
  children: React.ReactNode;
}

export function HeroImage({ children }: HeroImageProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/199820010016.jpg"
        alt="Professional background - Mike Hettesheimer product leader"
        fill
        className="object-cover"
        priority
        quality={80}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAICAgIChsYGBkYGBsYHxsYGBsYGx0YHBsYGBsYHBsYGBsYGBsYHBsYGBsYGBsYGBj/2wBDAQcHBwoIChMICChMGBoYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBsYGBj/wAARCAACAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8VAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
