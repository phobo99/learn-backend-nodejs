import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="about-container">
                    <div className="title-section header-about">
                        <h2>Truyền thông nói về BookingCare</h2>
                    </div>
                    <div className="section-about-content">
                        <div className="content-left">
                            <iframe width="570px" height="321px"
                                src="https://www.youtube.com/embed/FyDQljKtWnI"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div className="content-right">
                            <ul>
                                <li><a target="_blank" href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">Đặt lịch khám bệnh: Tiết kiệm, thông minh và hiệu quả</a></li>
                                <li><a target="_blank" href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm">Cà phê khởi nghiệp - 14/11/2018</a></li>
                                <li><a target="_blank" href="https://video.vnexpress.net/tin-tuc/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html">Khám bệnh không phải xếp hàng ở Hà Nội</a></li>
                                <li><a target="_blank" href="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html">Đặt khám chuyên khoa và hành trình hỗ trợ các bệnh viện quá tải</a></li>
                                <li><a target="_blank" href="https://infonet.vietnamnet.vn/khoe-dep/da-co-hon-20-000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html">Đã có hơn 20.000 lượt bệnh nhân đặt lịch khám qua BookingCare</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
