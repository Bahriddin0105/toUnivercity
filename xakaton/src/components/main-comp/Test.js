import React, { Component } from 'react';
import {Container, Variant} from './style'
// import {Link} from 'react-router-dom'
export default class Test extends Component {
    state = {
        
    }
    render() {
        return (
            <Container>
                <div className="place">
                    <div className="scrol">
                        <div></div>
                    </div>
                    <div className="question">
                        <p>question <span>6</span>/15</p>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Eligendi unde commodi iusto consequatur ducimus deserunt.</h5>
                    </div>
                    <hr />
                    <div className="variants">
                        <div>
                            <Variant>
                                <div className="order">A</div>
                                <span>Lorem ipsum dolor sit amet.</span>
                            </Variant>
                            <Variant>
                                <div className="order">B</div>
                                <span>Lorem ipsum dolor sit amet.</span>
                            </Variant>
                            <Variant>
                                <div className="order">C</div>
                                <span>Lorem ipsum dolor sit amet.</span>
                            </Variant>
                            <Variant>
                                <div className="order">D</div>
                                <span>Lorem ipsum dolor sit amet.</span>
                            </Variant>
                        </div>
                    </div>
                </div>
                {/* <Link to='/natija'>natija</Link> */}
            </Container>
        )
    }
}
