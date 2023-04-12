import './App.css';

function App() {
  return (
    <>
      <div className="">
        <div className='w-screen h-28 bg-white px-10 flex justify-between items-center'>
          <div className=' bg-white py-8 font-bold text-xl'>Nodius</div>
          <div className='flex gap-12 font-semibold'>
            <a href="#">Discover</a>
            <a href="#">Community</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <button className='border-2 border-stone-950 px-4 py-2 stroke-black rounded-3xl'>Connect Wallet</button>
          </div>
        </div>
      </div>
      <div className='px-16 py-16'>
        <div className='text-5xl font-bold '>
        We provide the<br /> <span className='text-[#7b31d1]'>best platform</span><br /> to connect with<br /><span className='text-[#7b31d1]'>your community</span>
        </div>
        <div className='pt-8 text-xl font-semibold'>
          Empower yourself and collaborate with like-minded<br />individuals on our decentralized platform
        </div>
        <div className='pt-8 flex gap-6'>
          <button className='bg-[#75fec0] border-2 border-stone-950 px-6 py-4 stroke-black rounded-full font-semibold'>Connect Wallet</button>
          <button className='border-2 border-stone-950 px-6 py-4 stroke-black rounded-full font-semibold'>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default App;
