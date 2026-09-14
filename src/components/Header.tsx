import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <div className="flex justify-center">
        <img
          className="w-32 h-32 rounded-full mask-radial-at-center"
          src={image.src}
          alt={image.alt}
        />
      </div>
      {children}
    </header>
  );
}
