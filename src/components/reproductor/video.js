import React from 'react';

const VideoPlay = ({url}) => {

if(url === undefined) url = "";
console.log(url);
    return ( <div className="course-video-part">
    <video  controls>
        <source src={url} />
    </video>
</div> );
}
 
export default VideoPlay;