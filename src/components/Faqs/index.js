// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {clickValue: []}

  checkDrop = id => {
    const {clickValue} = this.state
    const removeValue = clickValue.filter(eachValue => eachValue === id)
    if (removeValue.length === 0) {
      const addArr = [...clickValue, id]
      this.setState({clickValue: addArr})
    } else {
      const indexValue = clickValue.indexOf(id)
      clickValue.splice(indexValue, 1)
      this.setState({clickValue})
    }
  }

  render() {
    const {faqsList} = this.props
    const {clickValue} = this.state
    console.log(clickValue)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="faq-container">
            {faqsList.map(eachValue => (
              <FaqItem
                key={eachValue.id}
                valueSend={eachValue}
                clickIn={this.checkDrop}
                arrValue={clickValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
