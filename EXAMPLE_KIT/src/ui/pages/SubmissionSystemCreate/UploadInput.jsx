import React from 'react';
import { useTranslation } from 'react-i18next';

export default function UploadInput({ onChange, label }) {
    const { t } = useTranslation();

    const onUpload = () => {
        let reader = new FileReader();
        let file = window.document.getElementById('input').files[0];

        if (file) {
            reader.onload = e => {
                onChange(file);
            };

            reader.readAsDataURL(file);
        } else {
            console.warn(t('InvalidFileSelection'));
        }
    };

    return (
        <>
            <label
                style={{
                    cursor: 'pointer',
                }}
                className="MuiButtonBase-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-fullWidth"
                htmlFor="fileInput"
            >
                {label}
            </label>
            <input
                style={{
                    width: '0.1px',
                    height: '0.1px',
                    opacity: '0',
                    overflow: 'hidden',
                    position: 'absolute',
                    zIndex: '-1',
                }}
                type="file"
                name="fileInput"
                id="fileInput"
                onChange={onUpload}
            />
        </>
    );
}
