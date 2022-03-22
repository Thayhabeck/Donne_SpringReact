import React, { Component } from "react";


export default class Header extends Component {
    render() {
        return (
            <header className="header-pags p-0 m-0">
                <h2 className="text-center">{this.props.title}</h2>
                <hr className="p-0 m-0" />
            </header>
        )
    }
}
