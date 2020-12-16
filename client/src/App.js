import React, { Component } from "react"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      countries: [],
    }
  }

  componentDidMount() {
    fetch("/v1/countries")
      .then((response) => response.json())
      .then((data) => this.setState({ countries: data }))
  }
  render() {
    const countriesList = this.state.countries.map((country, i) => {
      return <p key={i}>{country.name}</p>
    })
    return (
      <div className='App'>
        <h1>Countries</h1>
        <div>{countriesList}</div>
      </div>
    )
  }
}

export default App
