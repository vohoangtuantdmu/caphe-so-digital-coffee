import { useState, useEffect } from 'react';
import { TinyMCEEditor } from './TinyMCEEditor';
import { RichTextEditor } from './RichTextEditor';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface EditorWrapperProps {
  value: string;
  onChange: (content: string) => void;
}

export const EditorWrapper = ({ value, onChange }: EditorWrapperProps) => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Set a timeout to switch to fallback if TinyMCE doesn't load
    const timer = setTimeout(() => {
      if (!editorLoaded) {
        console.warn('TinyMCE taking too long to load, switching to fallback editor');
        setUseFallback(true);
        setError('TinyMCE đang gặp vấn đề, chuyển sang trình soạn thảo dự phòng');
      }
    }, 10000); // 10 seconds timeout

    return () => clearTimeout(timer);
  }, [editorLoaded]);

  const handleTinyMCEInit = () => {
    console.log('TinyMCE loaded successfully');
    setEditorLoaded(true);
    setError(null);
  };

  const handleTinyMCEError = (error: any) => {
    console.error('TinyMCE failed to load:', error);
    setUseFallback(true);
    setError('Không thể tải TinyMCE, sử dụng trình soạn thảo dự phòng');
  };

  if (useFallback) {
    return (
      <div>
        {error && (
          <Alert className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <RichTextEditor content={value} onChange={onChange} />
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: useFallback ? 'none' : 'block' }}>
        <TinyMCEEditor 
          value={value} 
          onChange={onChange}
          onInit={handleTinyMCEInit}
          onError={handleTinyMCEError}
        />
      </div>
    </div>
  );
};