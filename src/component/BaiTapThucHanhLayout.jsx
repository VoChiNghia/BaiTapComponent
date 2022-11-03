import React, { Component } from 'react'
import Banner from './Banner'
import CardItem from './CardItem'
import Footer from './Footer'
import Header from './Header'
import {itemArr} from '../data/dataItems'

export default class BaiTapThucHanhLayout extends Component {
   
  render() {
    return (
      <div>
        <Header/>
        <div className="body">
            <div className="container">
                <Banner/>
                
                <div class="row gx-lg-5">
                {
                    
                    itemArr.map((item,index) => (
                        
                        <CardItem item={item} index={index}/>
                    ))
                }
        
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
