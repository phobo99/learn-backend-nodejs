import React, { Component } from "react";
import { connect } from 'react-redux';
import './DoctorExtraInfo.scss'
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';
import { FormattedMessage } from "react-intl";

class DoctorExtraInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfo: false
        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    showHideDetailInfo = (status) => {
        this.setState({
            isShowDetailInfo: status
        })
    }

    render() {
        let { isShowDetailInfo } = this.state;
        return (
            <div className="doctor-extra-info-container">
                <div className="content-up">
                    <div className="text-address">DIA CHI KHAM</div>
                    <div className="name-clinic">Phong kham chuyen khoa da lieu</div>
                    <div className="detail-address">207 pho hue - hai ba trung - ha noi</div>
                </div>
                <div className="content-down">
                    {isShowDetailInfo === false &&
                        <div className="short-info">
                            GIA KHAM: 250.000đ
                            <span onClick={() => this.showHideDetailInfo(true)}>
                                Xem chi tiet
                            </span>
                        </div>
                    }
                    {isShowDetailInfo === true &&
                        <>
                            <div className="title-price">GIA KHAM . </div>
                            <div className="detail-info">
                                <div className="price">
                                    <span className="left">Gia kham</span>
                                    <span className="right">250.000d</span>
                                </div>
                                <div className="note">
                                    Duoc uu tien kham truoc khi dat kham qua bookingcare
                                </div>
                            </div>
                            <div className="payment">
                                Nguoi benh co the thanh toan chi pho bang hinh thuc tien hoac ck
                            </div>
                            <div className="hide-price">
                                <span onClick={() => this.showHideDetailInfo(false)}>
                                    An bang gia
                                </span>
                            </div>
                        </>
                    }

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);