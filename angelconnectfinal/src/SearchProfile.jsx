import React from 'react';

const SearchProfile = ({ profile }) => {
  const { name, sectors, location, description } = profile;
  return (
    <div>
        <div className="flex gap-5 mt-20 ml-9 max-w-full w-[1046px] max-md:flex-wrap max-md:mt-10">
            <div className="shrink-0 my-auto bg-neutral-400 h-[91px] rounded-[72px] w-[91px]" />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto text-3xl font-extrabold text-zinc-800">
                    {name}
                </div>
                <div className="justify-center px-10 py-0.5 text-xl font-semibold text-center text-black whitespace-nowrap bg-teal-400 rounded-[54px] max-md:px-5">
                    Connect
                </div>
                </div>
                <div className="mt-5 text-xl text-black max-md:max-w-full">
                Sectors: {sectors.join(', ')}
                <br />
                  {location}
                </div>
            </div>
            </div>
            <div className="self-center mt-11 text-xl text-black w-[888px] max-md:mt-10 max-md:max-w-full">
            {description}
            </div>
            <div className="shrink-0 mt-8 ml-4 w-full h-px border border-solid bg-zinc-500 border-zinc-500" />
    </div>
  );
};

export default SearchProfile
