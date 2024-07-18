// Write your code here.
import './index.css'

const FaqItem = props => {
  let divEl
  let checkPara
  let img = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      alt="plus"
    />
  )
  const {valueSend, clickIn, arrValue} = props
  const {questionText, answerText, id} = valueSend

  const clickAdd = () => {
    clickIn(id)
  }

  if (arrValue.length === 0) {
    divEl = ''
  } else {
    checkPara = arrValue.filter(eachValue => eachValue === id)
    if (checkPara.length === 1) {
      divEl = (
        <div>
          <hr />
          <p className="para">{answerText}</p>
        </div>
      )
      img = (
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
          alt="minus"
        />
      )
    }
  }

  return (
    <li className="list-el">
      <div className="text-container">
        <h1 className="inner-heading">{questionText}</h1>
        <button className="custom-btn" type="submit" onClick={clickAdd}>
          {img}
        </button>
      </div>
      {divEl}
    </li>
  )
}

export default FaqItem
