import React, {Component} from 'react'
import style from './footer.css'

class Footer extends Component {

    render() {
        return (
            <div className={style.footer}>
                <div className={style.footerIn}>
                    <div className={style.footerInLeft}>
                        <ul className={style.list}>
                            <li>用户协议</li>
                            <li>条款</li>
                            <li>监管信息</li>
                            <li>免责声明</li>
                            <li>合伙人入口</li>
                        </ul>
                        <p className={style.des}>
                            风险提示：外汇交易存在较高风险，不适合所有投资者。决定参与交易前， 您应该谨慎考虑您的投资目标、经验等级及风险承受能力。 您可能会亏损部分或者全部资金。 如果您有任何疑问，
                            可在必要时向独立的金融顾问征询意见。
                        </p>
                        <p className={style.email}>客服邮箱：info@rostonesfx.com客服电话：400-9317-188</p>
                        <div className={style.line}>
                        </div>
                        <div className={style.paper}>
                            Formax International Market Limited 是已经在新西兰政府注册的金融服务提供商 （FSP注册号：FSP207987）， Formax
                            服务于个人和机构投资者。
                            地址：level 7, 203 queen street, Auckland Central
                        </div>
                    </div>
                    <div className={style.footerInRight}>
                        关注公众号
                        <img src={require('./er.jpg')} className={style.erwei}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer