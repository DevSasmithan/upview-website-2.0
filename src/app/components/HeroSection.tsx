import group1Img from "@/app/assets/images/hero_section_img_1.png";
export default function HeroSection() {
  return (
    <div className="hero-section-content">
      <div className="group1">
        <div className="group1-content">
          <div className="flex flex-col space-y-[24px]">
            <div>
              <h2 className="group1-header">Your Product Engineering Partner for Digital Future.</h2>
              <span className="group1-description">We develop innovative and creative solutions by bridging the gap between business and technology.</span>
            </div>
            <button className="btn-primary btn-primary-text">Visit Portfolio</button>
          </div>
        </div>
        <div>
        <img src={group1Img.src}  alt="image" className='w-[690px] h-[412px]' />
        </div>
      </div>
      <div className="group2">
        <div className="bg-[#F8F9FC] rounded-[16px]">
          <p className="font-Roboto font-[400] text-[24px] leading-[36px]">“We developed a great relationship with team Upview and their dedication to our products is evident in all aspects of the sites. We appreciate their attention to detail and creative approach to solve our problems. ”</p>
        </div>
      </div>
    </div>
  );
}
