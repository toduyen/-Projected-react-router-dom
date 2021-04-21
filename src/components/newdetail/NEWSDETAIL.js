import React, { Component } from 'react';
import dl from '../data/Data.json'
import NewRetail from '../NewsRetail/NewRetail';
class NewDetail extends Component {
    render() { 
      var dem = 0;
        return (
            <div>
   <div>
          {
            dl.map((value , key) => {
              if(value.id == this.props.match.params.id)
              {
                return(
                  <div className="container" key={key}>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <div className="jumbotron">
                        <img src={value.hinhanh} className alt />
                        <p className="lead">{value.tieude}</p>
                        <hr className="my-2" />
                        <p>More info</p>
                        <p className="lead">
                          {value.noidung}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
                )
              }
            })
          }
  <div className="container">
    <h1>Tin liên quan</h1>
    <div className="row">
          {
            dl.map((value , key) => {
              if(value.id != this.props.match.params.id)
              {
                if(dem <=3)
                {
                  return(
                    <NewRetail key={key} trichdan={value.trichdan} tinID={value.id} image={value.hinhanh} title={value.tieude} description={value.noidung}/>
                  )
                }
                dem++
              }
            })
          }
    </div>
  </div>
</div>

            </div>
        );
    }
}
 
export default NewDetail;