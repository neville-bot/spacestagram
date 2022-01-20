import "./Story.css";
import useFetch from "./utils";
import Box from "@mui/material/Box";
const key = process.env.REACT_APP_NASA_API_KEY;
const url1 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${key}`;
const url2 = `https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1000`;
const testUrl =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000";
function Story() {
  const [stories, isError, isLoaded] = useFetch(url1);
  console.log("stories", stories);
  if (isError) {
    return <div>Error occured fetching data...</div>;
  }
  if (isLoaded) {
    return <img src="#" alt="loader" name="loader" className="loader"></img>;
  }
  return (
    <Box>
      {stories.map((story) => {
        return (
          <section key={story.id}>
            <img
              maxWidth="500px"
              maxHeight="200px"
              src={story.img_src}
              alt="story"
            />

            <h3>
              {story.full_name}
              {story.earth_date}
            </h3>
          </section>
        );
      })}
    </Box>
  );
}
/*
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=r5QOmhPuK0wSJbLXdBRAk3pic9AT5VmpFFSw5qsY
*/

export default Story;
