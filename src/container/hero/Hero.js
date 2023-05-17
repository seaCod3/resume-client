import { i18n } from '../../translate/i18n';
import { Link } from 'react-router-dom';
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


            </div>

        </div>

    )
}