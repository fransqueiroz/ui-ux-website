import Image from "next/image";
import WhiteArrow from "../../public/assets/arrow.png"

export function Cta() {
    return (
        <div className="w-full rounded-[8px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[52px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]">
            <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px]">Monitor your website like a pro</h1>
            <p className="text-white pt-6 lg:pt[48px] lg:text-[18px]">
                Join over 800+ happy site owners boosting productivity and efficiency!
            </p>

            <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-10">
                <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 font-medium w-fit">Try for free</button>

                <button className="flex w-full items-center justify-center gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0">
                    Contact Sales 
                    <span>
                        <Image src={WhiteArrow} alt="Learn more"/>
                    </span>
                </button>
            </div>
        </div>
    )
}