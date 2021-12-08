import React from 'react'
class Airbnb extends React.Component {
  render() {
    const {first,children}=this.props
    return (
      <div className={`container`}>
        <h1>airbnb</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium, amet, dolorem provident non possimus eum maiores autem porro vel animi eligendi doloribus. Excepturi ducimus et cumque quibusdam aperiam doloremque.</p>
        <button>set story</button>
      </div>
    )
  }
}
class Airbnb1 extends React.Component {
  render() {
    return (
      <div className={`container ${first&&'first'}`}>
        <h1>airbnb</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium, amet, dolorem provident non possimus eum maiores autem porro vel animi eligendi doloribus. Excepturi ducimus et cumque quibusdam aperiam doloremque.</p>
        <button>set story</button>
      </div>
    )
  }
} 
class PayPal extends React.Component {
  render() {
    return (
      <div className={`container`}>
        <h1>airbnb</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium, amet, dolorem provident non possimus eum maiores autem porro vel animi eligendi doloribus. Excepturi ducimus et cumque quibusdam aperiam doloremque.</p>
        <button>set story</button>
      </div>
    )
  }
}
class PayPal1 extends React.Component {
  render() {
    return (
      <div className={`container`}>
        <h1>airbnb</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium, amet, dolorem provident non possimus eum maiores autem porro vel animi eligendi doloribus. Excepturi ducimus et cumque quibusdam aperiam doloremque.</p>
        <button>set story</button>
      </div>
    )
  }
}
class Ebay extends React.Component {
  render() {
    return (
      <div className={`container`}>
        <h1>airbnb</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium, amet, dolorem provident non possimus eum maiores autem porro vel animi eligendi doloribus. Excepturi ducimus et cumque quibusdam aperiam doloremque.</p>
        <button>set story</button>
      </div>
    )
  }
}
class Ebay1 extends React.Component {
  render() {
    return (
      <div className={`container`}>
        <h1>airbnb</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium, amet, dolorem provident non possimus eum maiores autem porro vel animi eligendi doloribus. Excepturi ducimus et cumque quibusdam aperiam doloremque.</p>
        <button>set story</button>
      </div>
    )
  }
}
export{Airbnb1}
export{PayPal}
export{PayPal1}
export{Ebay1}
export{Ebay}
export default Airbnb;

