import './ScreenView.css'

function ScreenView() {
    return (
        <div className='screen-container'>
            <div className='menu'>
                <ul>
                    <li>
                        songs
                    </li>
                    <li>
                        Albums
                    </li>
                    <li>
                        artist
                    </li>
                    <li>
                        plalist
                    </li>
                </ul>
            </div>
            <div className='music'>
                
            </div>
            <div className='playlist'></div>
        </div>
    )
}

export default ScreenView