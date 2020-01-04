import axios from 'axios';

export const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/api/uploadFile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    });
};
