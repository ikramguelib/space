import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png'
const Start =()=>{
    return <section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt="" />
                </div>
                <div className="start__content">
                    <h2 className='section__title'>
                        Ready to make a <span className='highlights'>change?</span>

                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam hic, nemo commodi eius qui placeat earum eligendi
                        voluptatum nam tempore atque ipsum est sint consequatur neque
                        enim deleniti quaerat rem!
                       
                    </p>
                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
}
export default Start