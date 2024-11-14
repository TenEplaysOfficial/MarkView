type MarkdownEditorProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function MarkdownEditor({
  value,
  onChange,
}: MarkdownEditorProps) {
  return (
    <div className="space-y-5">
      <label htmlFor="markdown-editor" className="text-lg font-bold font-fontEdu">
        Markdown Editor
      </label>
      <textarea
        id="markdown-editor"
        value={value}
        onChange={onChange}
        className="resize-none bg-slate-200 outline-none border rounded-xl w-full h-[37rem]  p-4 transform duration-150 focus:ring-2 no-scrollbar overflow-y-scroll  focus:ring-slate-400"
        aria-label="Markdown input"
      />
    </div>
  );
}
