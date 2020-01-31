import React from 'react';


class Form extends React.Component {

  state = {
    city: 'Warsaw',
    text: '',
    isLiked: true,
    number: '0'
  }

  // handleCityChange = event => {
  //   this.setState({
  //     city: event.target.value
  //   })
  // }

  // handleTextChange(e) {
  //   this.setState({
  //     text: e.target.value
  //   })
  // }

  // handleIsLikedChange = e => {
  //   this.setState({
  //     isLiked: e.target.checked
  //   })
  // }

  // handleNumberChange = e => {
  //   this.setState({
  //     number: e.target.value
  //   })
  // }

  handleChange = event => {
    console.log(event.target.type);

    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked
      })
    } else {

      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <label>
          City:
<input name="city" value={this.state.city}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Write sth about this city
          <textarea name="text" value={this.state.text} onChange={this.handleChange}></textarea>
        </label>
        <br />
        <label>
          Do you like this city?
<input name='isLiked' type="checkbox" checked={this.state.isLiked} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          How many times you were in this city?
   <select name='number' value={this.state.number} onChange={this.handleChange}>
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
