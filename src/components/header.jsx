export const Header = () => {
  return (
    <div className="h-[80px] flex justify-between items-center mx-14 font-bold">
      <h1 className="text-3xl italic">CARSME</h1>
      <ul className="flex gap-10 font-bold text-sm">
        <li>NEW CARS</li>
        <li>SERVICES</li>
        <li>ADD ON</li>
        <li>MODIFICATION</li>
      </ul>
      <div>
        <button className="text-white bg-black px-10 h-[40px] rounded-full">
          LOGIN
        </button>
      </div>
    </div>
  );
};
