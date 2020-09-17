import axios from 'axios';

export const uploadAction = async(image) => {
  const fd = new FormData();
  fd.append('image', image);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  try {
    const res = await axios.post('http://localhost:3200/api/images', fd, config);
  } catch (err) {
    console.log(err);
  }
}
