import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//COMPONENTS
import Header from './components/header';
import NewsList from './components/news-list';

class App extends Component{
    state={
        news:JSON 
    }
render(){  
    
         return(
             <div>
                <Header/>
                <NewsList news={this.state.news}/> 
            </div>
        )
    }
}// here news in NewsList can be anythin like name or people etc

ReactDOM.render(<App />, document.getElementById('root'));


