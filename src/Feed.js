import "./Feed.css";
import Story from "./Story";
import Stack from "@mui/material/Stack";
function Feed() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <main id="feed">
        <header>
          <h1>Welcome To Spacetagram</h1>
        </header>
        <Story />
      </main>
    </Stack>
  );
}

export default Feed;
