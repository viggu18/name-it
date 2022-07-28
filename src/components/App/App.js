import React from "react";
import './App.css'
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import Results from "../Results/Results";

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component{
    state = {
        headerTitle: 'Name it',
        headerExpanded: true,
        suggestedNames: []
    } 

    handleInputChange = (inputText) =>{
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : []
        })
    }

    render(){
        return(
            <div>
                <Header headerExpanded={this.state.headerExpanded} headerTitle={this.state.headerTitle}/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <Results suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

export default App;