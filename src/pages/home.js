import Img from '../imgs/Illustration.svg'
import ImgOne from '../imgs/pointer 1.svg'
import ImgTwo from '../imgs/pointer 1.png'
import ImgThree from '../imgs/pointer 1 (2).png'
import ImgFour from '../imgs/pointer 1 (3).png'
import Card from '../imgs/Card (1).png'
import CardOne from '../imgs/Hover Overlay (1).png'
import CardTwo from '../imgs/Card (11).png'
import ImgsOne from '../imgs/Icon.png'
import ImgsTwo from '../imgs/Icon (1).png'
import ImgsThree from '../imgs/Icon (2).png'
import ImgsFour from '../imgs/Icon (3).png'
import ImgsFive from '../imgs/Icon (4).png'
import ImgsSix from '../imgs/Icon (5).png'
import ImgSeven from '../imgs/Social Media Icon.png'
import RasmOne from '../imgs/arabic-businessman-standing-on-street-and-using-laptop-9623794.png'
import RasmTwo from '../imgs/woman-in-white-sleeveless-shirt-using-macbook-air-on-brown-wooden-table-3766189.png'
import RasmThree from '../imgs/apple-monitors-326518.png'
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";

function Home() {
  return (
    <div>
        <header className='min-h-3	justify-between items-center text-white flex py-4 px-[90px] bg-[#1C1E53]  text-center'>
        <div>
          <a className='text-4xl font-extrabold' href="">Finsweet</a>
        </div>
       
       <div className='flex gap-10'> 
       <ul className='flex gap-10 text-center justify-center items-center text-1xl'>
          <li><a href="">Home</a></li>
          <li className="text-gray-400"><a href="">About us</a></li>
          <li className="text-gray-400"><a href="">Features</a></li>
          <li className="text-gray-400"><a href="">Pricing</a></li>
          <li className="text-gray-400"><a href="">FAQ</a></li>
          <li className="text-gray-400"><a href="">Blog</a></li>
        </ul>
        
        <div>
          <button className='rounded-3xl border-solid border-2	border-slate-300 px-7 py-3'>
            <span>Contact us</span>
          </button>
        </div>
        </div>
        </header>

        <section className='h-[600px] bg-[#1C1E53] text-white'>
          <div className='flex justify-center items-center gap-[50px]'>
           <div>
              <h2 className='text-5xl	mb-10 font-bold mt-[100px]'>Building stellar <br /> websites for early <br /> startups</h2>
              <p className='	mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>

              <div  className='flex gap-[50px] items-center'>
                <button className='rounded-3xl border-solid border-2 border-slate-300 px-7 py-3 bg-[#FCD980] text-black'>
                   <span>View our work</span>
                </button>

               <p>View Pricing <span>----</span></p>
             </div>
           </div>

            <div>
              <img className='mt-[100px]' src={Img} alt="" />
            </div>
          </div>
        </section>

    <section>
       <div  className='bg-[#F4F6FC] h-[550px] text-black flex justify-between py-[60px] px-[150px] bg-[#F4F6FC] '>
        <div>
          <h3 className='text-4xl font-extrabold mb-[20px]'>How we work</h3>
          <p className='mb-[20px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</p>
          <p className='text-indigo-950 text-1xl'>Get in touch with us -----</p>
        </div>

        <div>
        <div className='flex gap-[20px]'>
        <div className='w-[300px] h-[180px]  flex'>
          <div className='flex justify-center  gap-[10px] flex-col'>
            <img className='w-[50px]'  src={ImgOne} alt="" />
            <h4 className='text-3xl'>Strategy</h4>
            <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
          </div>
        </div>

        <div className='w-[300px] h-[180px] flex'>
          <div className='flex justify-center  gap-[10px] flex-col'>
            <img className='w-[50px]'  src={ImgTwo} alt="" />
            <h4 className='text-3xl'>Wireframing</h4>
            <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
          </div>
        </div>
        </div>



        <div className='flex gap-[20px] mt-[30px]'>
        <div className='w-[300px] h-[180px] flex'>
          <div className='flex justify-center  gap-[10px] flex-col'>
            <img className='w-[50px]'  src={ImgThree} alt="" />
            <h4 className='text-3xl'>Design</h4>
            <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
          </div>
        </div>

        <div className='w-[300px] h-[180px] flex'>
          <div className='flex justify-center  gap-[10px] flex-col'>
            <img className='w-[50px]'  src={ImgFour} alt="" />
            <h4 className='text-3xl'>Development</h4>
            <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>

    <section className='h-[650px] py-[60px] px-[150px]'>
      <div className='flex justify-between items-center'>
        <h3 className='text-5xl font-bold tracking-widest'>View our projects</h3>
        <h4 className='font-semibold'>View More ------</h4>
      </div>

      <div className='flex justify-between mt-[50px]'>
        <div>
          <img className='h-[420px] w-[700px]' src={Card} alt="" />
        </div>

        <div>
          <img className='mb-[10px] h-[210px] w-[400px]' src={CardOne} alt="" />
          <img className='h-[210px] w-[400px]' src={CardTwo} alt="" />
        </div>
      </div>
    </section>

    <section className='py-[60px] px-[150px] bg-[#F4F6FC] h-[1080px]'>
      <div className='text-center'>
        <p className='mb-[10px] text-2xl'>Features</p>
        <h2 className='text-5xl	 font-bold mb-[100px]'>Design that solves <br /> problems, one product at <br /> a time</h2>
      </div>

      <div className='flex gap-[50px] mb-[100px]'>
        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={ImgsOne} alt="" />
          <h4 className='text-3xl mb-[10px]'>Uses Client First</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. 
            Pellentesque et velit aliquam sed faucib 
            turpis eu gravida mi. Pellentesque et 
            velit aliquam sed mi.  
          </p>
        </div>
        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={ImgsTwo} alt="" />
          <h4 className='text-3xl mb-[10px]'>Two Free Revision Round</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. 
            Pellentesque et velit aliquam sed faucib 
            turpis eu gravida mi. Pellentesque et 
            velit aliquam sed mi.  
          </p>
        </div>

        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={ImgsThree} alt="" />
          <h4 className='text-3xl mb-[10px]'>Template Customization</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. 
            Pellentesque et velit aliquam sed faucib 
            turpis eu gravida mi. Pellentesque et 
            velit aliquam sed mi.  
          </p>
        </div>

      </div>

      <div className='flex gap-[50px] mb-[100px]'>
        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={ImgsFour} alt="" />
          <h4 className='text-3xl mb-[10px]'>24/7 Support</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. 
            Pellentesque et velit aliquam sed faucib 
            turpis eu gravida mi. Pellentesque et 
            velit aliquam sed mi.  
          </p>
        </div>
        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={ImgsFive} alt="" />
          <h4 className='text-3xl mb-[10px]'>Quick Delivery</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. 
            Pellentesque et velit aliquam sed faucib 
            turpis eu gravida mi. Pellentesque et 
            velit aliquam sed mi.  
          </p>
        </div>

        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={ImgsSix} alt="" />
          <h4 className='text-3xl mb-[10px]'>Quick Delivery</h4>
          <p>
            Euismod faucibus turpis eu gravida mi. 
            Pellentesque et velit aliquam sed faucib 
            turpis eu gravida mi. Pellentesque et 
            velit aliquam sed mi.  
          </p>
        </div>

      </div>

    </section>

    {/* main  */}
    <section className="flex justify-around py-[100px] px-10 bg-[#F4F6FC]">
        <div>
            <h2 className="text-3xl  mb-[20px]">What our clients say about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div>
            <h2 className="text-2xl  mb-[20px]">"The best agency we have worked with so far. They <br />
             understand our product and are able to add new <br />
              features with a great focus."
            </h2>

            <div className='flex justify-between'>
             <div>
                 <h5 className="text-1xl">Jenny Wilson</h5>
                 <p>Vice President</p>

             </div>

             <div  className="flex gap-[5px] ">
                 <button className="size-14"><span><HiArrowCircleLeft /></span></button>
                 <button><span><HiArrowCircleRight /></span></button>  
             </div>
            </div>
        </div>
     </section>

     <section className="flex justify-around py-[100px] px-50" >
        <div>
            <h2 className="text-3xl  mb-[20px]">
            Frequently asked questions
            </h2>
            <p  className="text-[#2405F2] text-1xl">Contact us for more info</p>
        </div>
        
        <div>
        <div className="flex gap-[20px]">
            <div className="text-[#2405F2] text-2xl"><span>01</span></div>
            <div>
                <h3 className="text-2xl  mb-[20px]">
                How much time does it take?
                </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="my-[50px] bg-[gray] w-[500px] h-[1px]"></div>
            </div>
            <div className="text-[22px]">
                <span>x</span>
            </div>
            
        </div>

        <div className="flex gap-[20px]">
            <div className="text-[#2405F2] text-2xl"><span>02</span></div>
            <div>
                <h3 className="text-2xl  mb-[20px]">
                What is your class naming convention?
                </h3>
                

                <div className="my-[50px] bg-[gray] w-[500px] h-[1px]"> </div>
            </div>
            <div className="text-[22px]">
                <span>+</span>
            </div>
        </div>

        <div className="flex gap-[20px]">
            <div className="text-[#2405F2] text-2xl"><span>03</span></div>
            <div>
                <h3 className="text-2xl  mb-[20px]">
                How do you communicate?
                </h3>
                

                <div className="my-[50px] bg-[gray] w-[500px] h-[1px]"></div>
            </div>
            <div className="text-[22px]">
                <span>+</span>
            </div>
        </div>

        <div className="flex gap-[20px]">
            <div className="text-[#2405F2] text-2xl"><span>04</span></div>
            <div>
                <h3 className="text-2xl  mb-[20px]">
                I have a bigger project. Can you handle it?
                </h3>
                

                <div className="my-[50px] bg-[gray] w-[500px] h-[1px]"></div>
            </div>
            <div className="text-[22px]">
                <span>+</span>
            </div>
        </div>

        <div className="flex gap-[20px] justify-between">
            <div className="text-[#2405F2] text-2xl"><span>05</span></div>
            <div>
                <h3 className="text-2xl  mb-[20px]">
                What is your class naming convention?
                </h3>
            
            </div>
            <div className="text-[22px]">
                <span>+</span>
            </div>
        </div>
        </div>
     </section>

     {/* main tugadi  */}

     <section>
      <h1 className='text-4xl	mb-10 font-bold  px-[150px]'>Our blog</h1>
      <div className='flex gap-[50px] mb-[100px] items-center justify-center'>
        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={RasmOne} alt="" />
          <p>
          19 Jan 2022
          </p>
          <h4 className='text-3xl mb-[10px]'>
          How one Webflow user grew his 
           single person consultancy from
            $0-100K in 14 months
          </h4>
          <p>
          See how pivoting to Webflow 
          changed one person’s sales strategy
           and allowed him to attract 
          </p>
           <br />
          <p>
          Read More----
          </p>
        </div>
        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={RasmTwo} alt="" />
          <p>
          19 Jan 2022
          </p>
          <h4 className='text-3xl mb-[10px]'>
          How one Webflow user grew his 
           single person consultancy from
            $0-100K in 14 months
          </h4>
          <p>
          See how pivoting to Webflow 
          changed one person’s sales strategy
           and allowed him to attract 
          </p>
           <br />
          <p>
          Read More----
          </p>
        </div>

        <div className='bg-[white] w-[350px] px-[20px] py-[50px]'>
          <img className='mb-[10px]' src={RasmThree} alt="" />
          <p>
          19 Jan 2022
          </p>
          <h4 className='text-3xl mb-[10px]'>
          How one Webflow user grew his 
           single person consultancy from
            $0-100K in 14 months
          </h4>
          <p>
          See how pivoting to Webflow 
          changed one person’s sales strategy
           and allowed him to attract 
          </p>
           <br />
          <p>
          Read More----
          </p>
        </div>

      </div>
     </section>
      
     <footer className='bg-[#1C1E53] h-[350px] py-[100px] px-[150px] flex gap-[400px]'>
        <div className='text-[white]'>
          <a className='text-4xl font-extrabold '>Finsweet</a>
          <p className='mt-[20px] mb-[40px]'>
          We are always open to discuss your project and <br />
           improve your online presence.
          </p>

          <div className='w-[450px] h-[100px] bg-[#FCD980]
           flex text-[black] justify-between px-[20px] py-[20px]'>
            <div>
              <p className='text-[20px]'>
              Email me at
              </p>
              <p>
              contact@website.com
              </p>
            </div>
            <div>
              <p  className='text-[20px]'>
              Call us
              </p>
              <p>
              0927 6277 28525
              </p>
            </div>
          </div>
        </div>
       
        <div className='text-[white]'>
          <a className='text-4xl font-extrabold '>Lets Talk!</a>
          <p className='mt-[20px]'>
          We are always open to discuss your project, <br />
           improve your online presence and help with your <br />
            UX/UI design challenges.
          </p>

          <img className='mt-[0px]' src={ImgSeven} alt="" />
        </div>
      </footer>



       

    </div>
  
  )
}

export default Home;
