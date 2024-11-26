"use client"
import { useState } from "react";
import { createEditor, Editor } from "slate"; // Slate 에디터 인스턴스를 생성하기 위해 필요함
import { Slate, withReact, Editable } from "slate-react";

const CustomEditor = {
    isBoldMarkActive(editor: Editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
      });
      return !!match;
    },
}  
/**
 * @Slate Slate 에디터의 컨텍스트를 제공하는 래퍼 컴포넌트
 * @withReact: Slate 에디터 인스턴스에 React 특성을 추가
 * @Editable 실제로 텍스트를 편집할 수 있는 영역을 렌더링하는 컴포넌트
 */
export default function TextEditor() {

    const [editor] = useState(() => withReact(createEditor()));
    const initialValue = [
        {
          type: "paragraph",
          children: [{ text: "Hello World" }]
        }
    ];
    return (
        <div>
            <Slate editor={editor} initialValue={initialValue}>
             <Editable />
            </Slate> 
        </div>
    )
}
