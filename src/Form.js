import React from 'react';


class Form extends React.Component {

  state = {
    city: 'Warsaw',
    text: '',
    isLiked: true,
    number: '0'
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    })
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleIsLikedChange = e => {
    this.setState({
      isLiked: e.target.checked
    })
  }


  render() {
    return (
      <div>
        <label>
          City:
<input value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Write sth about this city
          <textarea value={this.state.text} onChange={this.handleTextChange.bind(this)}></textarea>
        </label>
        <br />
        <label>
          Do you like this city?
<input type="checkbox" checked={this.state.isLiked} onChange={this.handleIsLikedChange} />
        </label>
        <br />
        <label>
          How many times you were in this city?
   <select value={this.state.number}>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value="more">More</option>
          </select>
        </label>
      </div>
    )
  }
}

export default Form;
