import upviewLogo from '@/app/assets/images/LOGO.png'
export default function NavBar() {
    return (
      <div className="nav-content">
        <div>
            <img src={upviewLogo.src}  alt="upview Logo" className='w-[132px] h-[40px]' />
        </div>
        <div className='menu-items'>
            <a className='menu-item menu-text' >Our Services</a>
            <a className='menu-item menu-text' >Portfolio</a>
            <a className='menu-item menu-text' >About Upview</a>
            <a className='menu-item menu-text' >Careers</a>

            <button className='btn-outline-primary btn-outline-primary-text'>Schedule a Call</button>
        </div>
      </div>
    )
  }