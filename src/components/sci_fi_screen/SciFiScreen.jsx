import React, { Component } from 'react';
import './SciFiScreen.css';

const Screen = (i, title) => (
    <div key={'sci-fi-screen-' + i} className='sci-fi-screen' style={{ "--index": i }}>
        <div className='sci-fi-screen-outer-upper-trapezoid'></div>
        <div className='sci-fi-screen-image'></div>
        <div className="sci-fi-screen-content flex-start-start">
            <div className='sci-fi-screen-inner-upper-trapezoid'></div>
            <div className='sci-fi-screen-title-wrapper flex-center-center' style={{ "--stacks": "3" }}>
                <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "0" }}>{title}</span>
                <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "1" }}>{title}</span>
                <span data-value={title} className='sci-fi-screen-title' style={{ "--index": "2" }}>{title}</span>
            </div>
            <div className='sci-fi-screen-icons flex-start-start'>
                <a className='sci-fi-screen-icon flex-center-center' href="https://reddit.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
                    </svg>
                </a>
                <a className='sci-fi-screen-icon flex-center-center' href="https://twitter.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                </a>
                <a className='sci-fi-screen-icon flex-center-center' href="https://youtube.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                </a>
            </div>
            <div className='sci-fi-screen-inner-lower-trapezoid'></div>
        </div>
        <div className='sci-fi-screen-overlay'></div>
        <div className='sci-fi-screen-outer-lower-trapezoid'></div>
    </div>
)

export default class SciFiScreen extends Component {
    constructor(props) {
        super(props);

        this.l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.letters = "abcdefghijklmnopqrstuvwxyz";
        this.ttp = [
            "This is some Text To Print",
            "Here's another line.",
            "Wow"
        ];
    }

    componentDidMount() {
        this.spans = document.querySelectorAll(".sci-fi-screen-title");
    }

    handleMouseEnter() {
        let interval = null;
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            let innerText = this.spans[0].innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return this.spans[0].dataset.value[index];
                    }

                    return this.letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            for (let i = 0; i < this.spans.length; i++) {
                this.spans[i].innerText = innerText;
            }

            if (iteration >= this.spans[0].dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    typeWriter() {
        this.ttp = [
            "This is some Text To Print",
            "Here's another line.",
            "Wow"
        ]
    }

    render() {
        var screens = [];

        for (let i = 0; i < this.props.screenStack; i++) {
            screens.push(Screen(i, this.props.title))
        }

        return (
            <div className='sci-fi-screen-wrapper flex-center-center' style={{ "--stacks": this.props.screenStack }} onMouseEnter={(event) => this.handleMouseEnter(event)}>
                {screens.map(screen => screen)}
            </div>
        )
    }
}