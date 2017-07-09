import React, { Component } from 'react';

class VideoListItem extends Component {
    /*
    constructor(props){
        super(props);
    }*/

    render() {
        let item = this.props.video;
        const imgUrl = item.snippet.thumbnails.default.url;
        const title = item.snippet.title;

        return( 
            <li onClick={() => this.props.onVideoSelect(item)} className='list-group-item'>
                <div className='video-list media'>
                    <div className='media-left'>
                        <img src={imgUrl} className='media-object'/>
                    </div>

                    <div className='media-body'>
                        <div className='media-heading'>{title}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem ;