import React, { Component } from 'react';
import dl from '../data/Data.json'
import NewIteam from '../newItem/NewIteam';
class News extends Component {
    render() { 
        console.log(dl);
        return (
                  <div>
                      {
                          dl.map((value , key) => (
                                  <NewIteam key={key} tinID={value.id} image={value.hinhanh} title={value.tieude} description={value.noidung} trichdan={value.trichdan}></NewIteam>
                      
                          ))
                      }
                  </div>

        );
    }
}
 
export default News;