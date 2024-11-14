type DownloadbtnProps = {
  value: string;
  filename?: string;
  mimeType?: string;
};

export default function Downloadbtn({
  value,
  filename = "Document.md",
  mimeType = "text/markdown",
}: DownloadbtnProps) {
  const handleDownload = () => {
    const blob = new Blob([value], { type: mimeType });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };
  return (
    <>
      <button
        onClick={handleDownload}
        className="text-sm md:text-lg font-semibold border-2 px-2 py-1 rounded-lg outline-2 outline-offset-1 hover:outline-offset-2 hover:bg-indigo-500 hover:text-white transform duration-150 font-fontCursive"
        aria-label="Download Button"
      >
        Download
      </button>
    </>
  );
}
