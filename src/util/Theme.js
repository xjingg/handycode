import React from 'react';

export const TContext = React.createContext();
export const TConsumer = TContext.Consumer;

export class TProvider extends React.Component{
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

export class Slider extends React.Component{
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

export const Footer = ()=>(
    <footer><label>night theme:</label>
    <Slider/>
    </footer>
)

const Theme = () => (
    <TProvider>
      <TConsumer>
        {({ theme }) => (
          <div className={theme}>
            <h1>React Context</h1>
            <h3>Theme switcher example</h3>
            <Footer />
          </div>
        )}
      </TConsumer>
    </TProvider>
  );

  export default Theme;