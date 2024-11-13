import './ibrohim.css'
import Logofreent from './ibrohimImg/Logo.png'
import peoplesays from './ibrohimImg/peoplesayswithourpeople.png'
import peoplesaystheboard from './ibrohimImg/peoplesaystheboard.png'
import lineicon from './ibrohimImg/Line and Icon.png'
import helought from './ibrohimImg/heloughtme.png'
import peopleread from './ibrohimImg/theyreadbook.png'
import cardeeee from './ibrohimImg/cardddd1.png'
import cardwwww from './ibrohimImg/cardddd2.png'
import cardffff from './ibrohimImg/carddd3.png'
import wrapperlogo from './ibrohimImg/Logo Wrapper.png'
import peoplepictures1 from './ibrohimImg/peoplepictures1.png'
import peoplepictures2 from './ibrohimImg/peoplepictures2.png'
import peoplepictures3 from './ibrohimImg/peoplepictures3.png'
import peoplepictures4 from './ibrohimImg/peoplepictures4.png'
import Logofreenttttt from './ibrohimImg/Logo.png'
import Icons from './ibrohimImg/Social Media Icon.png'  

function Ibrohim() {
  return (
    <div>
        <div className='header-color'>
          <img className='img-1' src={Logofreent} alt="" />
          <ul className='ul-1'>
            <li className='li-1'><a href="#">Home</a></li>
            <li className='li-2 text-slate-300'><a href="#">Abaout us</a></li>
            <li className='li-3 text-slate-300'><a href="#">Features</a></li>
            <li className='li-4 text-slate-300'><a href="#">Pricing</a></li>
            <li className='li-5 text-slate-300'><a href="#">FAQ</a></li>
            <li className='li-6 text-slate-300'><a href="#">Blog</a></li>
          </ul>
          <button className='button-1 rounded-[41px] bg-[#1C1E53] text-white border-gray-300 border-2'>Contact us</button>
        </div>

      <div>
        <h2 className='h2-1 font-semibold ml-[150px] mt-[150px]'>About us</h2>
        <h2 className='h2-2 font-bold text-5xl ml-[140px] mt-[10px]'>Our designs solve <br /> problems</h2>
        <h2 className='h2-3 ml-[140px] mt-[20px] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam.</h2>
        <img className='img-2 ml-[750px] mt-[-250px]' src={peoplesays} alt="" />
      </div>

      <div className='listbody'>
        <h2 className='h2-4 font-semibold ml-[150px]'>Who we are</h2>
        <h2 className='h2-5 font-bold text-4xl ml-[145px] mt-[90px]'>Goal focussed</h2>
        <h2 className='h2-6 font-semibold ml-[145px] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.</h2>
        <h2 className='h2-7 font-bold text-4xl ml-[750px] mt-[-150px]'>Continuous improvement</h2>
        <h2 className='h2-6 font-semibold ml-[750px] mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.</h2>
        <img className='img-3 mt-[34px]' src={peoplesaystheboard} alt="" />
      </div>

      <div>
        <h2 className='h2-8 font-bold text-5xl text-center mt-[550px]'>The process we follow</h2>
        <div className='imgalot flex gap-20'>  
         <img className='img-4' src={lineicon} alt="" />
         <img src={lineicon} alt="" />
         <img src={lineicon} alt="" />
         <img src={lineicon} alt="" />
        </div>
        <h2 className='font-bold text-2xl mt-[100px] ml-[80px]'>Planning</h2>
        <h2 className='ml-[80px] mt-[10px]'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.</h2>
        <h2 className='font-bold text-2xl mt-[-90px] ml-[430px]'>Conception</h2>
        <h2 className='ml-[430px] mt-[10px]'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.</h2>
        <h2 className='font-bold text-2xl mt-[-90px] ml-[790px]'>Design</h2>
        <h2 className='ml-[790px] mt-[10px]'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.</h2>
        <h2 className='font-bold text-2xl mt-[-90px] ml-[1145px]'>Development</h2>
        <h2 className='ml-[1145px] mt-[10px]'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.</h2>
      </div>

      <div className='goodlist'>
        <h2 className='h2-9 font-semibold ml-[150px]'>Our Mission </h2>
        <h2 className='h2-10 font-bold text-3xl ml-[150px] mt-[85px]'>Inspire, Innovate, Share</h2>
        <h2 className='ml-[150px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</h2>
        <img className='img-5 ml-[750px] mt-[-200px]' src={helought} alt="" />
        <img className='img-6 ml-[150px] mt-[100px]' src={peopleread} alt="" />
        <h2 className='font-semibold ml-[780px] mt-[-300px]'>Our Vision</h2>
        <h2 className='font-bold text-3xl ml-[780px] mt-[10px]'>Laser focus</h2>
        <h2 className='ml-[780px] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</h2>
      </div>


      <div>
        <h2 className='h2-11 font-bold text-5xl text-center mt-[100px]'>The benefits of working <br /> with us</h2>
        <div className='cardssssss flex gap-16'>
         <img src={cardeeee} alt="" />
         <img src={cardwwww} alt="" />
         <img src={cardffff} alt="" />
        </div>
        <h2 className='h2-12 mt-[100px] font-bold text-4xl ml-[100px]'>100.000+</h2>
        <h2 className='h2-13 ml-[110px] mt-[5px]'>Finsweet Users</h2>
        <img className='img-7 ml-[370px] mt-[-50px]' src={wrapperlogo} alt="" />
      </div>

      <div className='Ourteam'>
        <h2 className='h2-14 text-center font-bold text-4xl mt-[150px]'>Meet Our Team</h2>
        <div className='cardsqueen'>
         <div className='cardqqqqqqqq'>
            <img className='img-8' src={peoplepictures1} alt="" />
            <h2 className='h2-15 font-semibold text-2xl ml-[85px] mt-[30px]'>John Smith</h2>
            <h2 className='h2-16 ml-[125px] mt-[10px]'>CEO</h2>
         </div>
         <div className='cardffffff'>
            <img className='img-9' src={peoplepictures2} alt="" />
            <h2 className='h2-15 font-semibold text-2xl ml-[80px] mt-[30px]'>Simon Adams</h2>
            <h2 className='h2-16 ml-[130px] mt-[10px]'>CTO</h2>
         </div>
         <div className='cardggggg'>
            <img className='img-10' src={peoplepictures3} alt="" />
            <h2 className='h2-15 font-semibold text-2xl ml-[85px] mt-[30px]'>Paul Jones</h2>
            <h2 className='h2-16 ml-[100px] mt-[10px]'>Design Lead</h2>
         </div>
         <div className='cardhhhhh'>
            <img className='img-11' src={peoplepictures4} alt="" />
            <h2 className='h2-15 font-semibold text-2xl ml-[85px] mt-[30px]'>Sara Hardin</h2>
            <h2 className='h2-16 ml-[100px] mt-[10px]'>Project Manager</h2>
         </div>
        </div>
      </div>


      <div className='theend w-full h-96 bg-blue-950 mt-[100px]'>
       <img className='img-12' src={Logofreenttttt} alt="" />
       <h2 className='h2-17 font-bold ml-[100px] text-white mt-[120px]'>We are always open to discuss your project and <br /> improve your online presence.</h2>
        <div className='button-yellow bg-yellow-500'>
         <h2 className='h2-18 font-bold ml-[50px]'>Read email</h2>
         <span className='spannnnn'>contact@website.com</span>
         <h2 className='h2-19 font-bold'>Call us</h2>
         <span className='spannn'>0927 6277 28525</span>
        </div>
        <h2 className='h2-20 font-bold'>Lets Talk!</h2> 
        <h2 className='h2-21'>We are always open to discuss your project, <br /> improve your online presence and help with your <br /> UX/UI design challenges.</h2>
        <img className='img-13' src={Icons} alt="" />
      </div>

    </div>
  )
}

export default Ibrohim;