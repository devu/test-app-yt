import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { VIDEO_LIKE, VIDEO_DISLIKE } from '../constants/index'
import { rateVideo } from '../actions/index'

class VideoPlayer extends Component {
    
    constructor(props){
        super(props);

        this.data = {
            previousVote: ''
        }

        this.state = {
            term:''
        }
    }

    render() {
        let item = this.props.video;

        if(item==undefined){
            return <div>Loading...</div>
        }

        //If new term has been updated by Redux flow and is different 
        //from previous one we, will request new data set based on new term
        var newTerm = this.props.term;
        if(newTerm != this.data.previousVote){
            this.data.previousVote = newTerm;
            this.props.onVote(newTerm);
            return <div>Loading...</div>
        }
        
        const videoId = item.id.videoId;
        const videoUrl =`https://www.youtube.com/embed/${videoId}`;
        const title = item.snippet.title;
        const desc = item.snippet.description;

        return( 
            <div className='video-player col-md-8'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe src={videoUrl} className='embed-responsive'/>
                </div>

                <div className='details'>
                    <div>{title}</div>
                    <div>{desc}</div>
                </div>

                <div className='vote'>
                    <span>Do you like this video?</span> 
                    <button type='submit' onClick={() => this.props.rateVideo('VIDEO_LIKED')} className='btn'>YES</button>
                    <button type='submit' onClick={() => this.props.rateVideo('VIDEO_DISLIKED')} className='btn'>NO</button>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {rateVideo}, dispatch);
}

function mapStateToProps(state) {
  console.log('App', state.votebar.term);
    return { term: state.votebar.term }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);