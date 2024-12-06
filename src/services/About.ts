import axios from "axios";
import ImageSource from "../Models/ImageSouce";

const baseUrl = process.env.REACT_APP_BASE_URL;

const getImageSource = async () => {
  const response = await axios.get<ImageSource[]>(`${baseUrl}/image-sources`);
  return response.data;
};

export default getImageSource;
