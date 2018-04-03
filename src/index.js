import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBTVuSbqPACyjQa8btLlp4tgaJwlI-y-W4';


// Functional component. This component should produce some html
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Class Based Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos }); //es6 stuff
      // this.setState({ videos: videos }); //es5
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
