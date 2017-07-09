import React, { Component } from 'react';
import VideoSearchBar from './video-search-bar';
import VideoList from './video-list';
import VideoPlayer from '../containers/video-player';
import YTSearch from 'youtube-api-search';
import debounce from 'debounce';

const YT_API_KEY = 'AIzaSyA2fuhJfdnqHBxARHY02kUlStmaZLPYxns';

export default class App extends Component {

  constructor(props){
      super(props);

      this.data = {
        previousVote: ''
      }

      this.state = {
          videos:[],
          selectedVideo: null
      }
  }

  componentDidMount(){
    this.videoSearch(this.props.term);
  }

  videoSearch(term){
    YTSearch({ key:YT_API_KEY, term: term}, (data) => {
        this.setState({ 
          videos: data,
          selectedVideo: data[0],
          term:''
        });
    });
  }

  render() {
    //throttling
    const videoSearch = debounce(term => this.videoSearch(term), 500);

    return (
      <div>
        <VideoSearchBar onSearchTermChange={videoSearch}/>
        <VideoPlayer 
          onVote={videoSearch}
          video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
