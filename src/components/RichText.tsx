import { ReactNode } from "react";

interface RichTextProps {
  children: ReactNode;
}

const RichText = ({ children }: RichTextProps) => {
  return (
    <div className="md:flex md:flex-column md:justify-center">
      <div className="p-4 max-w-5xl">{children}</div>
    </div>
  );
};

export default RichText;
