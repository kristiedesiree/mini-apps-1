//cannot use require keyword here
//class App overall will render the remainder of the components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'accountInfo'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.currentPage === 'accountInfo') {
      this.setState({currentPage: 'shippingInfo'}, function() {
      console.log(this.state);
      });
    } else if (this.state.currentPage === 'shippingInfo') {
      this.setState({currentPage: 'paymentInfo'}, function() {
      console.log(this.state);
      });
    } else if (this.state.currentPage === 'paymentInfo') {
      this.setState({currentPage: 'confirmation'}, function() {
      console.log(this.state);
      });
    }
    $.ajax({
      url: '/',
      method: 'POST',
      data: 'hello', 
      success: function(data) {
        console.log('here is data return from server', data);
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }
  render() {
    return (
      <div> 
        <h1> 
          Checkout 
        </h1> 
        <DisplayedForm handleClick = {this.handleClick} currentPage = {this.state.currentPage}/>
      </div>
    )
  }
}
//form1 component
var AccountInformation = (props) => {
  var handleClick = props.handleClick;
  return (
    //insert form fields here
    <div>
   
    <form className= "accountInfo" method="post" action="server.js">
      First Name: 
      <input type ="text" className= "firstName"/> <br/>
      Last Name:
      <input type ="text" className= "lastName"/> <br/>
      Email: 
      <input type ="text" className= "email"/> <br/>
      Password: 
      <input type ="text" className= "password"/> <br/>
    </form>
    <button type = "button" className= "next" onClick = {handleClick}> Next </button>
    </div>
  );
};

var ShippingInformation = (props) => {
  var handleClick = props.handleClick;
  return (
    //insert form fields here
    <div>
      <form className= "shippingInfo">
        Address: 
        <input type ="text" className= "address1"/> <br/>
        Address Line 2: 
        <input type ="text" className= "address2"/> <br/>
        City: 
        <input type ="text" className= "city"/> <br/>
        State:
        <input type ="text" className= "state"/> <br/>
        Zipcode:
        <input type ="text" className= "zip"/> <br/>
        Phone Number:
        <input type ="text" className= "phone"/> <br/>

      </form>
      <button type = "button" className= "next" onClick = {handleClick}> Next </button>
    </div>
  );
};

var PaymentInformation = (props) => {
  var handleClick = props.handleClick;
  return (
      <div>
      <form className= "paymentInfo">
        Credit Card Number:
        <input type="text" className= "creditCardNum"/> <br/>
        Expiration Date:
        <input type = "text" className = "expirationDate"/><br/>
        CVV:
        <input type="text" className= "cvv"/><br/>
        Billing Zipcode:
        <input type="text" className="billingZip"/><br/>
      </form>
      <button type = "button" className= "submit" onClick = {handleClick}> Submit </button>
    </div>
  );
}

var Confirmation = (props) => {
  return (
    <div>
    <p>Confirmation</p>
    <button type = "button" className= "purchase"> Purchase </button>
    </div>
  )
}

var DisplayedForm = (props) => {
  var pageToDisplay = props.currentPage;
  if (props.currentPage === 'accountInfo') {
    return (<AccountInformation handleClick = {props.handleClick}/>); 
  } else if (props.currentPage === 'shippingInfo') {
    return (<ShippingInformation handleClick = {props.handleClick}/>);
  } else if (props.currentPage === 'paymentInfo') {
    return (<PaymentInformation handleClick = {props.handleClick}/>);
  } else if (props.currentPage === 'confirmation') {
    return (<Confirmation/>);
  }
}

window.App = App;

ReactDOM.render(<App />, document.getElementById('app'));