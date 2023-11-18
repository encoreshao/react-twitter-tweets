import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

function Copyright(props: any) {
  return (
    <Typography color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://ranbot.online">
        RanBot AI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function TwitterTweets() {
  const [screenName, setScreenName] = useState('encoreshao');
  // https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference
  const twitterTweetsOptions = {
    dnt: 'true',
    hideBorder: 'true',
    hideFooter: 'true',
    hideHeader: 'true',
    hideScrollBar: 'false',
    lang: 'en',
    limit: '20',
    theme: 'light',
    width: '10px',
    chrome: 'transparent',
    showHeader: 'false',
    showReplies: 'false',
    transparent: 'false',
    widgetsVersion: '01917f4d1d4cb:1696883169554',
    embedId: 'twitter-widget-0'
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              my: 10,
              padding: '2%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'whitesmoke'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: blue[500] }}>
              <TwitterIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              X Tweets
            </Typography>
            <Box
              sx={{
                mt: 5,
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <TextField
                fullWidth
                id="screenname"
                label="X Screenname"
                name="screenname"
                value={screenName}
                variant="standard"
                onChange={(event) =>
                  setScreenName(event.target.value)
                }
              />
            </Box>
            <Box
              sx={{
                mt: 5,
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <iframe
                src={`https://syndication.twitter.com/srv/timeline-profile/screen-name/${screenName}?${new URLSearchParams(twitterTweetsOptions).toString()}`}
                width={'80%'}
                height={'800px'}
                referrerPolicy={'no-referrer-when-downgrade'}
                style={{ border: 0 }}
                title='Twitter Timeline'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                sandbox="allow-scripts allow-same-origin"
                allowFullScreen
              />
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}