import React, {Component} from 'react';


let imageDatas = require('../../static/data/images.json');

export default class Figure extends Component {
  constructor(props) {
      super(props);
      this.state = {
        imageDataArr: []
      }
  }
  componentDidMount() {
    imageDatas = (function genImageURL(imageDataArr){
      for (let i = 0; i < imageDataArr.length; i++) {
        let singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../../static/images/portfolio/' + singleImageData.fileName);
        imageDataArr[i] = singleImageData;
      }
      return imageDataArr;
    })(imageDatas);

    this.setState({
      imageDataArr: imageDatas
    })
  }


  render() {
    const figure = this.state.imageDataArr.map((ele, i) => {
        return (
          <figure className="effect-oscar wowload fadeInUp" key={i}>
            <img  src={ ele.imageURL } alt="img"/>
            <figcaption>
              <h2>Nature</h2>
              <p>Lily likes to play with crayons and pencils.<br/>
                <a href="images/portfolio/1.jpg" title="1" data-gallery>View more</a>
              </p>
            </figcaption>
          </figure>
        )
    });


    return (
      <div id="works" className=" clearfix grid">
        {figure}
      </div>
    )
  }

};
