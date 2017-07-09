import React, { Component } from 'react';

class VideoSearchBar extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            term:'Search for YT video'
        }
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return( 
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)} />
            </div>
        );
    }
}

export default VideoSearchBar;