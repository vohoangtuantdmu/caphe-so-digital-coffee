import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export const TinyMCEEditor = ({ value, onChange }: TinyMCEEditorProps) => {
  return (
    <Editor
      apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc" // Free API key for demo
      value={value}
      onEditorChange={(content) => onChange(content)}
      init={{
        height: 400,
        menubar: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | link image | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        branding: false,
        setup: (editor) => {
          editor.on('change', () => {
            const content = editor.getContent();
            onChange(content);
          });
        }
      }}
    />
  );
};