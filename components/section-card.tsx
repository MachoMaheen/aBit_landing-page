import type { NextPage } from "next";

const SectionCard: NextPage = () => {
  return (
    <div className="absolute top-[606px] left-[-10px] w-[1460px] h-[846px] text-center text-sm text-darkgray font-inter">
        <div className="absolute top-[0px] left-[0px] w-[1460px] h-[846px]">
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(#fff,_#fff),_rgba(255,_255,_255,_0.2)] [backdrop-filter:blur(50px)] box-border w-[1460px] h-[846px] border-b-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[290px] left-[97px] w-[283.64px] h-[312px]">
                <label htmlFor="fileInput" className="absolute top-[0px] left-[0px] rounded-3xl bg-whitesmoke w-[283.64px] h-[312px]">
                    <input
                        id="fileInput"
                        className="hidden"
                        type="file"
                    />
                    <div className="absolute top-[234px] left-[31px] tracking-[0.03em] leading-[160%] inline-block w-[222px]">
                        You haven’t uploaded any videos with aBit yet. Add now!
                    </div>
                    <img
                        className="absolute top-[130px] left-[126px] rounded-sm w-8 h-8 mx-auto"
                        alt=""
                        src="token-frame.svg"
                    />
                </label>
            </div>
        </div>
    </div>
  );
};

export default SectionCard;
