import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import FB from '../../assets/facebook.svg'
import YTB from '../../assets/youtube.svg'


class HomeFooter extends Component {
    render() {
        return (
            <div className="home-footer">
                <div className="footer-content">
                    <p>&copy; 2021 Lưu Đặng Phổ.
                        <a href="#" target="_blank">More information</a>
                    </p>
                    <div className="icon-mxh">
                        <a href="https://www.facebook.com/phobotkcb/" target="_blank" className="fb-icon">
                            <img src={FB} alt="Facebook" width="32" height="32" />
                        </a>
                        <a href="https://www.facebook.com/phobotkcb/" target="_blank" className="ytb-icon">
                            <img src={YTB} alt="Youtube" width="32" height="32" />
                        </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
