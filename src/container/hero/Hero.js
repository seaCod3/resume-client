import './hero.css'
import myImage from './resume-coverletter.webp';

export default function Hero() {


    window.onload = function () {
        const mediaQuery = window.matchMedia('(max-width: 991px)')
      
        function handleTabletChange(e) {
          const div = document.querySelector('div.col-sm-12.col-lg-7')
          if (div === null) {
            console.log('Element not found!')
            return
          }
          if (e.matches) {
            div.classList.add('flex-colum')
          } else {
            div.classList.remove('flex-colum')
          }
        }
      
        mediaQuery.addEventListener('change', handleTabletChange)
        handleTabletChange(mediaQuery)
      }
      

    return (
        <div className='hero'>
            <div className='container'>

                <div className='row' >
                    <div className='col-sm-12 col-lg-7 margin-right'>
                        <h1 className='h1'>Create a professional resume and cover letter</h1>
                        <p>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
                        <div className='flex'>
                            <button className='btn btn-primary hero-btn'>Create a Resume</button>
                            <button className='btn btn-secondary hero-btn'>How it works?</button>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-5 flex-center'>
                        <img src={myImage} alt='resume cover letter' />
                    </div>
                </div>


            </div>

        </div>

    )
}