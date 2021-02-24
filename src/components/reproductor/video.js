import React from 'react';

const VideoPlay = ({url}) => {

    
console.log(url);
    return ( <div className="course-video-part">
    <video  controls>
        <source src={url} type="video/mp4"/>
    </video>
</div> );
}
 
export default VideoPlay;