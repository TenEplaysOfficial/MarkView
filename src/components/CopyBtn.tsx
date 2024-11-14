import { useState } from "react";

type CopyBtnProps = {
  content: string;
};

export default function CopyBtn({ content }: CopyBtnProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="text-sm md:text-lg font-semibold border-2 px-2 py-1 rounded-lg outline-2 outline-offset-1 hover:outline-offset-2 hover:bg-indigo-500 hover:text-white transform duration-150 font-fontCursive"
      aria-label="Copy Button"
    >
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
}
