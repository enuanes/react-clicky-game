import React, { Component } from 'react';
import './App.css';
import fiftyStates from './fiftyStates.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import StateCard from './components/StateCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        fiftyStates: fiftyStates,
        unselectedFiftyStates: fiftyStates
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectFiftyState = usState => {
        const findFiftyState = this.state.unselectedFiftyStates.find(item => item.usState === usState);

        if(findFiftyState === undefined) {
            // failure to select a new U.S. state
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                fiftyStates: fiftyStates,
                unselectedFiftyStates: fiftyStates
            });
        }
        else {
            // success to select a new U.S. state
            const newFiftyStates = this.state.unselectedFiftyStates.filter(item => item.usState !== usState);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                fiftyStates: fiftyStates,
                unselectedFiftyStates: newFiftyStates
            });
        }

        this.shuffleArray(fiftyStates);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.fiftyStates.map(fiftyState => (
                        <StateCard
                            usState={fiftyState.usState}
                            image={fiftyState.image}
                            selectFiftyState={this.selectFiftyState} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

