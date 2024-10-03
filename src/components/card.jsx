export const Card = ({ model, make, year, fuelType, engine, transmission }) => {
  return (
    <div className="border px-4 py-3 rounded-lg flex flex-col gap-3">
      <h3 className="font-bold">
        {make} {model}
      </h3>
      <div>
        <p>Merk : {make}</p>
        <p>Tahun : {year}</p>
        <p>Tipe Bahan bakar : {fuelType}</p>
        <p>Tipe Mesin : {engine}</p>
        <p>Transmisi : {transmission}</p>
      </div>
      <button className="bg-black text-white w-full rounded-md">More</button>
    </div>
  );
};
