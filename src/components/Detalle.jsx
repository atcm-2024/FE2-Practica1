export default function Detalle() {
  /* grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3
*/
  return (

      <div className="h-screen grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-screen ">
        <div className="md:justify-center md:items-center grid md:grid-cols-3 sm:grid-cols-2 md:w-screen">
            <div className="md:mt-20 sm:ml-7 sm:mt-10 lg:ml-96  md:w-3/6">
              <figure className="flex">
                  <img src="./images/photo1.png" alt="" className="sm:w-40 sm:h-48 md:w-56 md:h-72"/>
                  <label htmlFor="" className="[writing-mode:vertical-rl] md:text-lg sm:text-xs">PRODUCT OWNER</label>
              </figure>
                  <figcaption className="md:text-2xl sm:text-base font-bold ">
                        Bill Mahoney
                  </figcaption>
                  
                </div>
            <div className=" sm:ml-7  sm:mt-28 lg:ml-56 items-end md:w-3/6 md:h-1/6">
                <figure className="flex">
                  <img src="./images/photo2.png" alt="" className="sm:w-40 sm:h-48 md:w-56 md:h-72"/>
                  <label htmlFor="" className="[writing-mode:vertical-rl] md:text-lg sm:text-xs">PRODUCT OWNER</label>
              </figure>
                <figcaption className="md:text-2xl sm:text-base font-bold">
                      Saba Cabrera
                </figcaption>            
            </div>
            <div className="sm:mt-10 sm:ml-7 lg:ml-14 md:mt-20 md:w-3/6">
              <figure className="flex">
                  <img src="./images/photo3.png" alt="" className="sm:w-40 sm:h-48 md:w-56 md:h-72"/>
                  <label htmlFor="" className="[writing-mode:vertical-rl] md:text-lg sm:text-xs">PRODUCT OWNER</label>
              </figure>
                <figcaption className="md:text-2xl sm:text-base font-bold ">
                      Shae Le
                </figcaption>
              </div>
            <div className="sm:ml-7 sm:mt-28 lg:ml-96  md:w-3/6">
              <figure className="flex">
                    <img src="./images/photo4.png" alt="" className="sm:w-40 sm:h-48 md:w-56 md:h-72"/>
                    <label htmlFor="" className="[writing-mode:vertical-rl] md:text-lg sm:text-xs">PRODUCT OWNER</label>
                </figure>
                <figcaption className="md:text-2xl sm:text-base font-bold ">
                      Skylah Lu
                </figcaption>
            </div>
            <div className="sm:mt-10 sm:ml-7 lg:ml-56 md:h-1/6 md:w-3/6">
                <figure className="flex">
                  <img src="./images/photo5.png" alt="" className="sm:w-40 sm:h-48 md:w-56 md:h-72"/>
                  <label className="[writing-mode:vertical-rl] md:text-lg text-xs"  >DEVELOPER</label>
                </figure>
                  <figcaption className="md:text-2xl sm:text-base font-bold ">
                        Griff Richards
                  </figcaption>         
              </div>
            <div className="mt-10 sm:ml-7 sm:mt-28 lg:ml-14 md:w-3/6"> 
                <figure className="flex">
                  <img src="./images/photo6.png" alt="" className="sm:w-40 sm:h-48 md:w-56 md:h-72"/>
                  <label htmlFor="" className="[writing-mode:vertical-rl] md:text-lg sm:text-xs">DEVELOPER</label>
                </figure>
                <figcaption className="md:text-2xl sm:text-base font-bold flex-col">
                        Stan John
                </figcaption>
            </div>
            
         </div>

    </div>
  );
}

