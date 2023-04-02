import './hero.css'
import myImage from './resume-coverletter.webp';
    ;

export default function Hero() {

    return (
        <div className='hero'>
            <div className='container'>

                <div className='row' >
                    <div className='col-sm-12 col-md-7'>
                        <h1>Create a professional resume and cover letter</h1>
                        <p>Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!</p>
                        <div className='flex'>
                        <button className='btn btn-primary hero-btn'>Create a Resume</button>
                        <button className='btn btn-secondary hero-btn'>Need Some Help?</button>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-5'>
                        <img src={myImage} alt='resume cover letter' />
                    </div>
                </div>


            </div>

        </div>

    )
}