import CopyBtn from "./CopyBtn";
import ReactMarkdown from "react-markdown";
import Downloadbtn from "./Downloadbtn";

type MarkdownPreviewProps = {
  value: string;
};

export default function MarkdownPreview({ value }: MarkdownPreviewProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold font-fontEdu">Markdown Preview</h1>
        <div className="space-x-2">
          <Downloadbtn value={value} />
          <CopyBtn content={value} />
        </div>
      </div>
      <div className="bg-slate-200 outline-none border rounded-xl w-full h-[37rem] p-4 transform duration-150 focus:ring-2 focus:ring-slate-400 no-scrollbar overflow-y-scroll ">
        <ReactMarkdown
          children={value}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-lg font-medium mt-4 mb-2">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-base font-medium mt-4 mb-2">{children}</h5>
            ),
            h6: ({ children }) => (
              <h6 className="text-sm font-medium mt-4 mb-2">{children}</h6>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5 space-y-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-5 space-y-2">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
            code: ({ children }) => (
              <code className="bg-slate-800 text-white px-2 py-1 rounded text-sm">
                {children}
              </code>
            ),
            pre: ({ children }) => {
              return (
                <pre className="bg-gray-800 text-white p-4 rounded-2xl">
                  {children}
                </pre>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
