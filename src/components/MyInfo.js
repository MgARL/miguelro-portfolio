import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ProfilePic from '../images/Miguel.png'
import Link from '@mui/material/Link';

function MyInfo() {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src={ProfilePic}
                    alt="Miguel Rodriguez"
                    sx={{ height: '20rem' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        Miguel Rodriguez
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        I am a passionate web developer that uses my skills to solve problems that will bring value to clients and prospects. I am always learning about new and upcoming technologies that can help me bring  a better experience to the end user.
                    </Typography>
                    <hr />
                    <Typography variant='h5'> Contact Me</Typography>
                    <Link href="https://www.linkedin.com/in/miguel-rod-developer" target="_blank" underline="hover" sx={{display: 'block'}}>
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/MgARL" underline="hover"  target="_blank" sx={{display: 'block'}}>
                       GitHub
                    </Link>
                    <Link href="https://twitter.com/mgarl22" underline="hover"  target="_blank" sx={{display: 'block'}}>
                       Twitter
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MyInfo