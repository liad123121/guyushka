import { Grid2, Box } from "@mui/material";
import wikiLogo from "../assets/Wikipedia-Logo.png";
import netflixLogo from "../assets/Netflix-Logo.png";
import amazonLogo from "../assets/Amazon-Logo.png";
import googleLogo from "../assets/Google-Logo.png";
import youtubeLogo from "../assets/Youtube-Logo.png";
import twitchLogo from "../assets/Twitch-Logo.png";

const Main = () => {
  const links: { name: string; path: string; image_path: string }[] = [
    {
      name: "Wikipedia",
      path: "https://www.wikipedia.org/",
      image_path: wikiLogo,
    },
    {
      name: "Netflix",
      path: "https://www.netflix.com/",
      image_path: netflixLogo,
    },
    {
      name: "Amazon",
      path: "https://www.amazon.com/",
      image_path: amazonLogo,
    },
    {
      name: "Google",
      path: "https://www.google.com/",
      image_path: googleLogo,
    },
    {
      name: "Youtube",
      path: "https://www.youtube.com/@Northernlion",
      image_path: youtubeLogo,
    },
    {
      name: "Twitch",
      path: "https://www.twitch.tv/cassutto",
      image_path: twitchLogo,
    },
  ];

  return (
    <Grid2 container spacing={2}>
      {links.map((link) => {
        return (
          <Grid2 size={4} key={link.image_path}>
            <div
              onClick={() => {
                window.location.href = link.path;
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={3}
                border="solid 1px lightgray"
                flexDirection="column"
                gap={3}
                sx={{
                  "&:hover": { backgroundColor: "lightgray" },
                  borderRadius: "8px",
                }}
              >
                <p>{link.name}</p>
                <img
                  style={{ height: "7rem" }}
                  src={link.image_path}
                  alt={link.name}
                />
              </Box>
            </div>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default Main;
