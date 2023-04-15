import React, { useState } from 'react';
import UploadService from '../../services/UploadService';

export const EditProfile: React.FunctionComponent<any> = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [isFilePicked, setIsFilePicked] = useState<boolean>(false);
  const onChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const onClick = async () => {
    const formData: FormData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);
    try {
      await UploadService.uploadFile(formData);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input type="file" name="file" onChange={onChange} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <button onClick={onClick}>Upload</button>
      </div>
    </div>
  );
};
