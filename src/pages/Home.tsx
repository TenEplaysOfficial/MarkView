import { useState } from "react";
import MarkdownEditor from "../components/MarkdownEditor";
import MarkdownPreview from "../components/MarkdownPreview";

export default function Home() {
  const [value, setValue] = useState<string>(`# Markdown Preview Demo
Welcome to the **Markdown Preview** demo! This text includes all major Markdown elements to help you test each feature in your app.

## Table of Contents

1. [Headings](#headings)
2. [Text Formatting](#text-formatting)
3. [Lists](#lists)
4. [Links and Images](#links-and-images)
5. [Code Blocks](#code-blocks)
6. [Tables](#tables)
7. [Blockquotes](#blockquotes)
8. [Horizontal Rule](#horizontal-rule)

---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Text Formatting

- **Bold text**: \`**bold text**\`
- *Italic text*: \`*italic text*\`
- ***Bold and italic***: \`***bold and italic***\`
- ~~Strikethrough~~: \`~~strikethrough~~\`
- Inline \`code\`: \`\` \`code\` \`\`

## Lists

### Unordered List

- Item 1
  - Nested Item 1
  - Nested Item 2
- Item 2
- Item 3

### Ordered List

1. First item
2. Second item
   1. Nested item 1
   2. Nested item 2
3. Third item

## Links and Images

Here's a link to [OpenAI](https://openai.com).

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

## Code Blocks

### JavaScript Code

\`\`\`js
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
\`\`\`
`);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2">
        <MarkdownEditor value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="md:w-1/2">
        <MarkdownPreview value={value} />
      </div>
    </div>
  );
}
