import './Controls.css'
import Backward from '../../assets/backward.svg'
import Forward from '../../assets/forward.svg'
import Pause from '../../assets/pause-solid.svg'
import Play from '../../assets/play-solid.svg'



function Controls() {
    return (
        <section className='control-section'>
            <div className='icon-container'>
                <div className='inner-circle'>

                </div>
                <img className='icon icon-1' src={Backward} alt="" srcset="" />
                <img className='icon icon-2' src={Forward} alt="" srcset="" />
                {/* <img className='icon icon-3' src={Pause} alt="" srcset="" /> */}
                <img className='icon icon-4' src={Play} alt="" srcset="" />
                <span className='menu-button'>Menu</span>
            </div>
        </section>
    )
}

export default Controls