import React from "react";
import App from './App';

const TContext = React.createContext();
const TConsumer = TContext.Consumer;

class TProvider extends React.Component{
    toggleTheme = evt=>{
        this.setState({theme: evt.target.checked ? "night" : "day"});
    }

    state={
        theme:"night",
        toggleTheme: this.toggleTheme
    }

    render(){
        return(
            <TContext.Provider value={this.state}>
                {this.props.children}
                </TContext.Provider>
        )
    }
}
class Slider extends React.Component{
    render(){
        return(
            <label className="switch">
                <TConsumer>
                    {({toggleTheme, theme})=>(
                        <input onChange={toggleTheme} type="checkbox" checked={theme === "night"} />
                    )}
                    </TConsumer>
                    <span className="slider round" />
                    </label>
        )
    }
}

export const Hover = ()=>(
    <div className="hover"><label>night theme:</label>
    <Slider/>
    </div>
)

const Home = (props) => (
  <TProvider>
    <TConsumer>
      {({ theme }) => (
        <div className={theme}>
            <App />
          <Hover />
        </div>
      )}
    </TConsumer>
  </TProvider>
);

export default Home;
