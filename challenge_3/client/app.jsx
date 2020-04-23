class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cart: [],
      form: 'one',
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      ccNumber: '',
      ccExpiration: '',
      ccCVV: '',
      billingZip: ''
    }
    this.checkForm = this.checkForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  checkForm() {
    if (this.state.form === 'one') {
      console.log(FormOne);
    } else if (this.state.form === 'two') {
      return <FormTwo handleChange={this.handleChange} />
    } else if (this.state.form === 'three') {
      return <FormThree handleChange={this.handleChange} />
    }
  }

  getCartItems() {
    axios.get('/')
      .then(({data}) => this.setState({ cart: data }))
      .catch(err => console.log('error getting shopping cart'))
  }

  handleChange(event) {
    console.log(event);
    console.log(event.target);
    // this.setState();
  }

  componentDidMount() {
    this.getCartItems()
  }

  render() {
    return (
      <div>
        {this.checkForm}
      </div>
    )
  }
}

// F1 collects name, email, and password for account creation.

class FormOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="accountCreate">
        <form onSubmit={(event) => (this.props.handleSubmit(event))}>
          <label> Name:
            <input name="name" value={this.props.name} onChange={this.props.handleChange}/>
          </label>
          <label> Email:
            <input name="email" value={this.props.email} onChange={this.props.handleChange}/>
          </label>
          <label> Password:
            <input name="password" value={this.props.passwordß} onChange={this.props.handleChange}/>
          </label>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.

class FormTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="accountCreate">
        <form onSubmit={(event) => (this.props.handleSubmit(event))}>
          <label> Address Line 1:
            <input name="addressLine1" value={this.props.addressLine1} onChange={this.props.handleChange}/>
          </label>
          <label> Address Line 2:
            <input name="addressLine2" value={this.props.addressLine2} onChange={this.props.handleChange}/>
          </label>
          <label> City:
            <input name="city" value={this.props.city} onChange={this.props.handleChange}/>
          </label>
          <label> State:
            <input name="state" value={this.props.state} onChange={this.props.handleChange}/>
          </label>
          <label> ZIP:
            <input name="zip" value={this.props.zip} onChange={this.props.handleChange}/>
          </label>
          <label> Phone Number:
            <input name="phone" value={this.props.phone} onChange={this.props.handleChange}/>
          </label>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}

// F3 collects credit card #, expiry date, CVV, and billing zip code.

class FormThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="accountCreate">
        <form onSubmit={(event) => (this.props.handleSubmit(event))}>
          <label> Credit Card Number:
            <input name="ccNumber" value={this.props.ccNumber} onChange={this.props.handleChange}/>
          </label>
          <label> Credit Card Expiration Date:
            <input name="ccExpiration" value={this.props.ccExpiration} onChange={this.props.handleChange}/>
          </label>
          <label> Credit Card CVV:
            <input name="ccCVV" value={this.props.ccCVV} onChange={this.props.handleChange}/>
          </label>
          <label> Billing ZIP:
            <input name="billingZip" value={this.props.billingZip} onChange={this.props.handleChange}/>
          </label>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));