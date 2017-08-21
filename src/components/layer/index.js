import React, {Component} from 'react'
import Shadow from '../shadow'

import style from './layer.css'

class Layer extends Component {


    render() {

        return (
            <div>
                <Shadow/>
                <div className={style.layer} style={{width:600,height:500}} ></div>
            </div>
        )
    }
}

export default Layer