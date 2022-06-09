import React, { useState } from 'react';

const VideoPanel = ({video}) => {
        let codeRequired = video.url.split("=")[1];
          let srcLink =`https://www.youtube.com/embed/${codeRequired}`;
          // let srcLink = video.url.replace("watch?v=", "embed/")
          const [rate, setRate] = useState(video.rating);
          const likeClick =()=>{
           setRate(rate+1)
          }
            const dislikeClick =()=>{
           setRate(rate-1)
          }

          
          return (
            <div>
              <div>
                <h3>{video.title}</h3>
              </div>
              <div>
                <h5>{video.id}</h5>
              </div>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={srcLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <img onClick={dislikeClick} src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/undefined/external-dislike-feedback-kmg-design-detailed-outline-kmg-design.png" />
                {rate}
                <img onClick={likeClick} src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/undefined/external-like-feedback-kmg-design-detailed-outline-kmg-design.png" />
              </div>
            </div>
          );
    
}
 
export default VideoPanel;