import React, { Component } from 'react';
import VideoListItem from './video-list-item'

class VideoList extends Component {

    constructor(props){
        super(props);
    }

    render() {

        let id=0;
        let items = this.props.videos.map((video) => {
            return <VideoListItem 
                onVideoSelect={this.props.onVideoSelect}
                video={video} 
                key={video.etag}/>
        });

        return( 
            <ul className='video-list col-md-4'>
                {items}
            </ul>
        );
    }
}

export default VideoList;