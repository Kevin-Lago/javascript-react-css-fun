import React, { Component } from 'react';
import './SciFiScreen.css';

const Screen = (i, title) => (
    <div className='sci-fi-screen' style={{ "--index": i }}>
        <div className='sci-fi-screen-outer-upper-trapezoid'></div>
        <div className='sci-fi-screen-image'>

        </div>
        <div className="sci-fi-screen-content flex-center-start">
            <div className='sci-fi-screen-inner-upper-trapezoid'></div>
            <div className='sci-fi-screen-title-wrapper' style={{ "--stacks": "3" }}>
                <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "0" }}>{title}</span>
                <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "1" }}>{title}</span>
                <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "2" }}>{title}</span>
            </div>
            <div className='sci-fi-screen-scrolling-text'>

            </div>
            <div className='sci-fi-screen-inner-lower-trapezoid'></div>
        </div>
        <div className='sci-fi-screen-overlay'>

        </div>
        <div className='sci-fi-screen-outer-lower-trapezoid'></div>
    </div>
)

export default class SciFiScreen extends Component {
    handleMouseEnter() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;
        this.spans = document.querySelectorAll(".sci-fi-screen-title");
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            let innerText = this.spans[0].innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return this.spans[0].dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            this.spans[0].innerText = innerText;
            this.spans[1].innerText = innerText;
            this.spans[2].innerText = innerText;

            if (iteration >= this.spans[0].dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    render() {
        var screens = [];

        for (let i = 0; i < this.props.screenStack; i++) {
            screens.push(Screen(i, this.props.title))
        }

        return (
            <div className='sci-fi-screen-wrapper flex-center' style={{ "--stacks": this.props.screenStack }} onMouseEnter={(event) => this.handleMouseEnter(event)}>
                {screens.map(screen => screen)}
            </div>
        )
    }
}