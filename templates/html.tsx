import { Component } from "react";
import React from "react";
/**
 * @description renders html
 */
export default class extends Component<any> {
    render(){
        return <div>{this.props.message}</div>
    }
}