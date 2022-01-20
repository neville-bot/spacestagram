import { useState, useEffect } from "react";
export default function useFetch(url, opts) {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setError(false);
    setIsLoaded(true);
    const fetchNasa = async () => {
      try {
        await fetch(url, opts)
          .then((res) => {
            return res.json();
          })
          .then((data) => parseData(data))
          .then((nasaData) => setStories(nasaData));
      } catch (error) {
        setError(true);
        setIsLoaded(false);
        console.error(error);
      }
      setIsLoaded(false);
    };
    if (process.env.NODE_ENV === "test") {
      setIsLoaded(false);
    }
    if (process.env.NODE_ENV === "development") {
      fetchNasa();
    }
  }, [url]);
  return [stories, error, isLoaded];
}
// useFetch(
//   "https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000"
// );

function parseData(nasaObj) {
  const nasaData = [];
  nasaObj.photos.forEach((photo) => {
    const {
      id,
      img_src,
      earth_date,
      camera: { full_name },
    } = photo;
    const story = {
      id,
      img_src,
      earth_date,
      full_name,
    };
    nasaData.push(story);
  });
  return nasaData;
}
