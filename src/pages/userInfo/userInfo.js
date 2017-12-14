import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from "actions/userInfo";

class UserInfo extends Component {

    render() {
        const { userInfo, isLoading, errorMsg } = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>userInfo：</p>
                                    <p>usename：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({ userInfo: state.userInfo }), { getUserInfo })(UserInfo);