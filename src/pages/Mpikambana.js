import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hiditrampika extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            mailaka: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
       let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
         [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">anarana feno</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Apididro eto ny anaran feno" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              {/* <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Teny miafina</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Ampidiro eto ny teny miafina" name="password" value={this.state.password} onChange={this.handleChange} />
              </div> */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Teny miafina</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Apididro eto ny teny miafina" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Adiresy mailaka</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Ampidiro eto ny adiresy mailaka" name="email" value={this.state.mailaka} onChange={this.handleChange} />
              </div>

              

              <div className="FormField">
                  <button className="FormField__Button mr-20">Hiditra</button> <Link to="/hiditra" className="FormField__Link">Efa mpikamabana aho</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default Hiditrampika;
