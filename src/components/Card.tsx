import {useState} from 'react'

interface Props {
    title: string;
    bodyText: string;
    imgSrc: string;
}

const Card = ({title, bodyText, imgSrc}: Props) => {

    const [hover, setHover] = useState(false);

  return (
    <div className="card text-bg-dark" onMouseOver = {() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={imgSrc} className={hover? "card-img opacity-25" : "card-img"}/>
        <div className="card-img-overlay d-flex flex-column justify-content-center"> 
          <h3 className="card-title">{hover? title : ""}</h3>
          <p className="card-text">
            {hover? bodyText : ""}
          </p>
        </div>
      </div>
  )
}

export default Card