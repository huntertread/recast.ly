import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="video-list">
    {
      props.videos.map((video, index) => {
        return (<VideoListEntry key={index} video={video} clickHandler={props.clickHandler}/>);
      })
    }
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// ReactDom.render(<VideoListEntry key={index} video={video}/>, document.getElementsByClassName("video-list"));

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//  <div>{props.item.map(video => <VideoListEntry item={video}/>)}</div>