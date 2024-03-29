/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import BlueArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";


export function Hero() {
    return (
        <div className="pt-4 lg:pt-10">
            <div className="px-5 lg:px-[280px]">
                <h1 className="text-center text-[32px] lg:text-[64px] leading-[40px] lg:leading-[72px] font-medium principal-color">Start monitoring your website like a pro</h1>
                <p className="text-center pt-6 main-color lg:text-lg lg:leading-7">
                    Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
                </p>

                <div className="flex w-full pt-8 justify-center gap-x-6">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
                        Try for Free
                    </button>
                    <button className="w-1/2 blue-2-color font-medium flex items-center justify-center gap-x-2 lg:w-fit">
                        View Pricing 
                        <span>
                            <Image src={BlueArrow} alt="Learn More"/>
                        </span>
                    </button>
                </div>
            </div>

            <div className="relative flex h-full w-full justify-center">
                <Image src={Gradient} alt="Gradient" className="min-h-[500px] w-full object-cover lg:h-auto" />
                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={HeroImage} alt="Hero Image" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"/>

                    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                        <p className="text-white text-center lg:text-lg">Trusted by these companies</p>
                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px-5 align-middle lg:grid-cols-5 ">
                            <Image src={Google} alt="Google Companies"/>
                            <Image src={Slack} alt="Slack Companies"/>
                            <Image src={Trustpilot} alt="Trustpilot Companies"/>
                            <Image src={Cnn} alt="Cnn Companies"/>
                            <Image src={Cluth} alt="Companies"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}