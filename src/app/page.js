import { Card } from "@/components/card";
import { Header } from "@/components/header";

const apiUrl = "https://freetestapi.com/api/v1/cars";

async function getData() {
  const res = await fetch(apiUrl);
  const vehicles = res.json();
  return vehicles;
}

export default async function Homepage() {
  const data = await getData();
  // console.log(data);
  return (
    <div className="flex flex-col justify-center gap-4">
      <Header />
      <div className="flex flex-col justify-center items-center ">
        <h2 className=" font-black text-[129px] text-center w-fit -mt-14 -mb-8">
          LAMBORGHINIAVENTADOR
        </h2>
        <div className="w-[1789px] m-auto">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/16493.jpg"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[1789px] m-auto">
        <div>
          <h3 className="text-4xl font-black">LIST CARS</h3>
          <div className="grid grid-cols-5 gap-4 my-4 ">
            {data.map((list) => {
              return <Card key={list.id} {...list} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
