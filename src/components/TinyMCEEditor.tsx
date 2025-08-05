import { Editor } from '@tinymce/tinymce-react';
import { useRef, useEffect } from 'react';

interface TinyMCEEditorProps {
  value: string;
  onChange: (content: string) => void;
  onInit?: () => void;
  onError?: (error: any) => void;
}

export const TinyMCEEditor = ({ value, onChange, onInit, onError }: TinyMCEEditorProps) => {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    console.log('TinyMCE Editor mounted with value:', value);
  }, []);

  const handleEditorChange = (content: string) => {
    console.log('TinyMCE content changed:', content);
    onChange(content);
  };

  return (
    <div className="w-full">
      <Editor
        apiKey="rpj9yh9ds9kunybhvm9uhh5g29s1qwf7ct8z6s0gj96ui25y"
        onInit={(evt, editor) => {
          editorRef.current = editor;
          console.log('TinyMCE editor initialized successfully');
          onInit?.();
        }}
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | link image | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-height: 1.6; }',
          branding: false,
          skin: 'oxide',
          content_css: 'default',
          promotion: false,
          license_key: 'gpl',
          forced_root_block: 'p',
          force_br_newlines: false,
          force_p_newlines: true,
          paste_auto_cleanup_on_paste: true,
          paste_remove_styles: true,
          paste_remove_styles_if_webkit: true,
          paste_strip_class_attributes: 'all',
          setup: (editor) => {
            editor.on('init', () => {
              console.log('TinyMCE setup completed');
            });
            
            editor.on('change', () => {
              console.log('TinyMCE content changed via setup');
            });

            editor.on('keyup', () => {
              const content = editor.getContent();
              console.log('TinyMCE keyup event, content:', content);
            });
          }
        }}
      />
    </div>
  );
};