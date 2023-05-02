import React, { Component } from 'react';
import './SciFiScreen.css';

export default class SciFiScreen extends Component {
    handleMouseOver() {
        console.log("here")
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let interval = null;

        const spans = document.querySelector(".sci-fi-screen-title");

        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            spans.innerText = spans.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return spans.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= spans.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    render() {
        return (
            <div className='sci-fi-screen-wrapper flex-center'>
                <div className='sci-fi-screen' style={{ "--index": "0" }}>

                </div>
                <div className='sci-fi-screen' style={{ "--index": "1" }} onMouseOver={(event) => this.handleMouseOver(event)}>
                    <div className='sci-fi-screen-image'>

                    </div>
                    {/* <img src='./assets/orange_mesh_points_distortion_black_background_4k_hd_abstract.jpg' /> */}
                    <div className="sci-fi-screen-content flex-center-start">
                        <div className='sci-fi-screen-title-wrapper' style={{ "--stacks": "3" }}>
                            <span className='sci-fi-screen-title' style={{ "--index": "0" }}>{this.props.title}</span>
                            <span className='sci-fi-screen-title' style={{ "--index": "1" }}>{this.props.title}</span>
                            <span className='sci-fi-screen-title' style={{ "--index": "2" }}>{this.props.title}</span>
                        </div>
                    </div>
                    <div className='sci-fi-screen-overlay'>

                    </div>
                </div>
                <div className='sci-fi-screen' style={{ "--index": "2" }}>

                </div>
            </div>
        )
    }
}