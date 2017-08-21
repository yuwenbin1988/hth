import React, {Component} from 'react'
import MT4 from './MT4'
import Partner from './partner'
import Superiority from './superiority'
import PageTable from './pageTable'
import Button from '../button'

import style from './pageHome.css'

class PageHome extends Component {

    render() {
        return (
            <div>
                <div className={style.bannerWrap}>
                    <div ><img className={style.bannerImg} src={require('./banner.jpg')} /></div>
                    <div className={style.PageTableDiv}>
                        <PageTable/>
                    </div>
                    <div className={style.bottom}>
                        <Button icon={<i className="fa fa-windows" ></i>} value="立即开户" large />
                    </div>
                </div>
                <Superiority/>
                <MT4/>
                <Partner/>
            </div>
        )
    }
}
export default PageHome