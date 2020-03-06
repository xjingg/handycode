import React from 'react';

export function Card({name, email, id}){
    return(
        <div className="card">
            <img alt="robots" src={`https://robohash.org/${id}?size=100x100`} />
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
    )
}

export function CardList({robots}){
    return (
        <div>
          {robots.map((user, i) => {
            return ( 
              <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
              />
            );
          })}
        </div>
      );
}

export function SearchBox({searchfield, searchChange}){
    return(
        <div className="searchbox">
            <input classname="search" type='search' placeholder="search here" onChange={searchChange} />
            </div>
    )
}

export const Scroll=(props)=>{
    return(
        <div
        style={{ overflow: "scroll", border: "1px solid black", height: "800px" }}
      >
        {props.children}
      </div>
    )
}

class FilterList extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>{
            this.setState({robots: users})
        })
    }
    onSearchChange = event=>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
          });
        return !robots.length ?(
            <h1>Loading</h1>
        ): (
            <div className="list">
                <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
          </Scroll>
                </div>
        )
    }
}

export default FilterList;