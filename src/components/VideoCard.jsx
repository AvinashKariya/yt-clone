import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants';
 
const VideoCard = ({video : {id : {videoId},snippet}}) => {
  console.log(videoId,snippet)
  return (
    <Card sx={{width : { xs:'100%',md:'300px',ls:'320px',sm:'358px'},boxShadow:'none',borderRadius:'none'}}  >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width:{xs:'100%',md:'320px',sm:'358px'},height:180}}/>
      </Link>
      <CardContent sx={{ backgroundColor: ' #1e1e1e', height:'106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="gray">
            {snippet.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize:12,color:'gray',m1:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
