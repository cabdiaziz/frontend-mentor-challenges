function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-[#0a294d] w-[132vh] h-[50vh] rounded-xl mt-[20vh] flex flex-row">
        <div className="pl-20 pt-20 pr-20 ">
          <h1 className="text-4xl font-inter font-black text-white">
            get <span className="text-purple-500 ">insights</span> that help
            your business grow
          </h1>
          <p className="text-base text-gray-300 mt-4 pr-12">
            discover your business and welcome discover your business and
            welcome discover your business and welcome discover your business
          </p>
          <div className="flex mt-12 text-white uppercase ">
            <div className="flex flex-col">
              <h1 className="text-2xl font-black">10k+</h1>
              <p className="text-gray-300 text-sm mt-1">companies</p>
            </div>
            <div className="flex flex-col mx-12">
              <h1 className="text-2xl font-black">314</h1>
              <p className="text-gray-300 text-sm mt-1">templates</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black">12M+</h1>
              <p className="text-gray-300 text-sm mt-1">queries</p>
            </div>
          </div>
        </div>

        <div className="text-xl text-white w-[140vh] h-[50vh] rounded-xl bg-blue-900 ">
          <img
            src="https://previews.123rf.com/images/zinkevych/zinkevych1802/zinkevych180201157/95388496-excited-programmers-emotional-happy-young-programmers-feeling-excited-while-sitting-together-in.jpg"
            alt="img"
            className="h-[50vh] rounded-xl "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
