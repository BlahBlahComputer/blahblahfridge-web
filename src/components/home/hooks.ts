import { useRef, useState } from 'react';

import { uploadImage } from './api';

export function useImageUpload() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const imageUploadFunc = () => {
    if (!fileRef.current) return;

    fileRef.current.click();
  };

  const upload = async (file: File) => {
    const res = await uploadImage({ file });

    window.location.href = `/analyze?key=${res.slice(res.lastIndexOf('/') + 1)}`;
  };

  const onChange = async () => {
    if (fileRef.current?.files && fileRef.current.files[0]) {
      setLoading(true);
      await upload(fileRef.current.files[0]);
      setLoading(false);
    }
  };

  return {
    fileRef,
    imageUploadFunc,
    onChange,
    loading,
  };
}
