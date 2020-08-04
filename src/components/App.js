import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getAllUsers, sortUsersByEmail, sortUsersBySurname, sortUsersByDefault} from "../redux/actions";

import "./App.css";

const App = ({userData, getAllUsersConnect, sortUsersByEmailConnect, sortUsersByDefaultConnect, sortUsersBySurnameConnect}) => {
    useEffect(() => {
        getAllUsersConnect();
    }, []);

    return (
        <div>
            <div className="buttonsGroup">
                <button onClick={() => sortUsersByDefaultConnect()}>All</button>
                <button onClick={() => sortUsersBySurnameConnect()}>Surname</button>
                <button onClick={() => sortUsersByEmailConnect()}>Email</button>
            </div>
            <div className="app">
                {userData.map((item) => {
                    return (
                        <div key={item.id} className="itemsWrap">
                            <img src={item.avatar} alt={`${item.first_name}_${item.last_name}`} style={{borderRadius: "50%"}} />
                            <div className="contentWrap">
                                <b> {item.last_name}</b>
                                <span>{item.first_name}</span>
                                <span>{item.email.length > 17 ? item.email.slice(0, 16) + "..." : item.email}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userData: state.userReducer.userData,
    };
};

export default connect(mapStateToProps, {
    getAllUsersConnect: getAllUsers,
    sortUsersByEmailConnect: sortUsersByEmail,
    sortUsersBySurnameConnect: sortUsersBySurname,
    sortUsersByDefaultConnect: sortUsersByDefault,
})(App);
