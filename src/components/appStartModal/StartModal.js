import { useState } from 'react';
import img1 from '../../resources/img/1.png'
import img2 from '../../resources/img/2.png'
import img3 from '../../resources/img/3.png'
import './startModal.scss'

const StartModal = ({closeModal}) => {
    let [slide, setSlide] = useState(1)
    const [checked, setChecked] = useState(false)
    const maxSlide = 4

    const selectSlide = () => {
        switch (slide){
            case 1:
               return <Slide1/>
            case 2:
                return <Slide2/>
            case 3:
                return <Slide3/>
            case 4:
                return <Slide4/>
            default://
        }    
    }

    const slideForward = () => {
        setSlide(slide = slide + 1)
        if(slide > maxSlide) setSlide(1)
    }

    const slideBack = () => {
        setSlide(slide = slide - 1)
        if(slide < 1) setSlide(maxSlide)
    }

    const setCheckedFunction = () => {
        setChecked(!checked)
    }

    return (
        <div className='startmodal'>
            <div className='startmodal__sheet'>
                <div className='startmodal__title'>Welcome to SoundVisualMachine!</div>
                <div className='app__line'></div>
                    <div className='startmodal__container'>                       
                           {selectSlide()} 
                    </div>                
                <div className='navigation app__flex__between'>
                    <div>
                        <span>{slide}/{maxSlide} </span>
                        <button className='startmodal__buttons' onClick={() => slideBack()}>back</button>
                        <button className='startmodal__buttons' onClick={() => slideForward()}>forward</button>
                        <button className='startmodal__buttons' onClick={() => closeModal(checked)}>close thish window</button>
                    </div>
                        <div className='navigation__text'>don't show this window anymore</div>
                        <input 
                        className='startmodal__checkbox'
                        name='dontShow'
                        checked={checked}
                        onChange={() => setCheckedFunction()}
                        type="checkbox"/>
                </div>
            </div>            
        </div>
    )
}

const Slide1 = () => {
    return (
        <div className='startmodal__content'>
            <p>Hey! I am glad to see you on the page of my application. At the moment, it is not designed for use on mobile devices. The application will work, but access to some functions will not be possible, since the application has not yet been adapted to small permissions.</p> <br/><br/><br/>
            <p>Attention!!! For the application to work, you need permission to capture the audio stream from a microphone or stereo mixer (recommended). Please allow the use of input devices on your PC.</p>  <br/><br/><br/> 
            Here in this welcome window are some instructions on how to use the system settings. Please review them. <br/><br/><br/><br/><br/><br/>
            by ArtPRO 2022 enginpro@yandex.ru
        </div>
    )
}

const Slide2 = () => {
    
    return (
        <div className='startmodal__content'>
            <img src={img1} alt='image' style={{'width' : '100%'}}/>
            <p>This is a visual representation of the sound stream. You can change the color of the representation, the number of samples (rate: 255, 204, 92), the type of rendering (render), enable peaks.</p><br/><p>The colored bars in the background indicate the range of samples that you have selected in the channels.</p><br/><p>When the number of samples changes, the scale at the bottom will change. It will help you navigate when choosing the necessary frequencies.</p><br/><p>The add channel button allows you to add channels. In total, you can add 10 channels.</p>
        </div>
    )
}

const Slide3 = () => {
    
    return (
        <div className='startmodal__content'>
            <img src={img2} alt='image' style={{'width' : '100%'}}/>
            <p>This is a representation of the channel. Start point and end point allow you to set a range of samples.</p><br/><p>The channel is assembled using two methods. The average value from the selected samples or the maximum value from the selected samples.</p><br/><p>On the visual representation, you can see the assembled frequency, how it works, as well as the peak of operation.</p><br/><p>The rear buffer and the front buffer allow you to adjust the trigger peak for the assembly.</p><br/><p>And the last select allows you to select the reaction rate of the trigger peak. You can also choose the color of the channel and there will also be a button to remove the channel.</p>
        </div>
    )    
}

const Slide4 = () => {
    
    return (
        <div className='startmodal__content app__flex'>
            <div>
             <img src={img3} alt='image' style={{'height' : '400px'}}/>  
            </div>
            <div className='ml'>
            <p>Here you can customize the visual representation. Set the ignition speed and attenuation speed, as well as the maximum brightness. The type of visual representation of channels. Choose whether to display the name and borders. Well, and a button to switch to full-screen mode.</p><br/><p>Have fun!!! :)</p>
            </div>
            
        </div>
    )
}

export default StartModal;