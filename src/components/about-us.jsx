import pic1 from "../images/cinema1.jpg";
import pic2 from "../images/cinema-2.jpg";
import pic3 from "../images/cinema-popcorn.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutUs() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[])

    return ( 
        <div className="w-full my-20">
            <h2 className="text-3xl font-bold text-center sm:text-5xl">
                See how Barahi Movies was created
            </h2>
            <p className="text-xl font-bold text-center mt-2">
                Scroll below to know more
            </p>

            <div className="flex flex-col items-center justify-around w-[95%] mx-auto my-20 gap-10 md:flex-row" data-aos="fade-right" data-aos-duration="2000">
                <img src={pic1} alt="pic" className="w-full md:w-1/2"/>
                <div>
                    <h2 className="text-3xl font-bold">
                        Our story
                    </h2>
                    <p className="text-md mt-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        lorem  Sunt dicta corrupti laborum, corporis quos sed velit soluta beatae, dignissimos sapiente ad officiis dolor impedit cupiditate quas consequuntur, necessitatibus rerum dolorum!
                        Lorem arum saepe officiis, impedit iusto voluptatem, obcaecati laboriosam eos rerum similique voluptatum architecto id labore voluptate asperiores dolore fugiat sed nisi exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti saepe veritatis vitae facilis quod provident aliquid similique sapiente numquam a quidem ullam repellat dicta cum sint nisi, sequi nulla!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quos consequuntur illo provident itaque quaerat architecto quod laboriosam fugit, eius debitis. Aliquam optio iure doloribus perferendis magni tempora autem fuga!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis consequuntur perferendis deserunt hic eos culpa veniam repellat, eum dolore nihil pariatur dolorem soluta ad mollitia aliquid illo laboriosam dolores!
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-around w-[95%] mx-auto my-20 gap-10 md:flex-row-reverse" data-aos="fade-left" data-aos-duration="2000">
                <img src={pic3} alt="pic" className="w-full md:w-1/2"/>
                <div>
                    <h2 className="text-3xl font-bold">
                        Amazing Cinema Experiance
                    </h2>
                    <p className="text-md mt-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        lorem  Sunt dicta corrupti laborum, corporis quos sed velit soluta beatae, dignissimos sapiente ad officiis dolor impedit cupiditate quas consequuntur, necessitatibus rerum dolorum!
                        Lorem arum saepe officiis, impedit iusto voluptatem, obcaecati laboriosam eos rerum similique voluptatum architecto id labore voluptate asperiores dolore fugiat sed nisi exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti saepe veritatis vitae facilis quod provident aliquid similique sapiente numquam a quidem ullam repellat dicta cum sint nisi, sequi nulla!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quos consequuntur illo provident itaque quaerat architecto quod laboriosam fugit, eius debitis. Aliquam optio iure doloribus perferendis magni tempora autem fuga!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis consequuntur perferendis deserunt hic eos culpa veniam repellat, eum dolore nihil pariatur dolorem soluta ad mollitia aliquid illo laboriosam dolores!
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-around w-[95%] mx-auto my-20 gap-10 md:flex-row" data-aos="fade-right" data-aos-duration="2000">
                <img src={pic2} alt="pic" className="w-full md:w-1/2"/>
                <div>
                    <h2 className="text-3xl font-bold">
                        Vestality and Affodablity
                    </h2>
                    <p className="text-md mt-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        lorem  Sunt dicta corrupti laborum, corporis quos sed velit soluta beatae, dignissimos sapiente ad officiis dolor impedit cupiditate quas consequuntur, necessitatibus rerum dolorum!
                        Lorem arum saepe officiis, impedit iusto voluptatem, obcaecati laboriosam eos rerum similique voluptatum architecto id labore voluptate asperiores dolore fugiat sed nisi exercitationem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti saepe veritatis vitae facilis quod provident aliquid similique sapiente numquam a quidem ullam repellat dicta cum sint nisi, sequi nulla!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quos consequuntur illo provident itaque quaerat architecto quod laboriosam fugit, eius debitis. Aliquam optio iure doloribus perferendis magni tempora autem fuga!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis consequuntur perferendis deserunt hic eos culpa veniam repellat, eum dolore nihil pariatur dolorem soluta ad mollitia aliquid illo laboriosam dolores!
                    </p>
                </div>
            </div>

            
        </div>
     );
}

export default AboutUs;