import React from 'react';
import youtube from './youtube';

export class SearchBox extends React.Component{
    state={term:''};

    onInputChange=event=>{
        this.setState({term: event.target.value});
    } 
    onFormSubmit=event=>{
        event.preventDefault();
        this.props.onFinalFormSubmit(this.state.term);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>video search</label>
                        <input type='text' value={this.state.term} onChange={this.onInputChange} />
                        </div>
                        </form>
                </div>
        )
    }
}

export function VideoItem({video, onVideoSelect}){
    return(
        <div onClick={()=>onVideoSelect(video)} className="video-item">
            <img alt={video.snippet.title} className="ui img" src={video.snippet.thumnails.medium.url}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                </div>
            </div>
    )
}

export function VideoList({videos, onVideoSelect}){

           const renderList = videos.map(video=>{
               return(
                <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
                )
            })

            return(
                <div className="ui relaxed divided">{renderList}</div>
            )    
}

const VideoDetail = ({ video }) => {
    if (!video) {
      return <div>Loading...</div>;
    }
  
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  };

  
export class VideoApp extends React.Component{
    state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('cat');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBox onFinalFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );}}