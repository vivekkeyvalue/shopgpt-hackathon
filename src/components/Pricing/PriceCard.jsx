const PriceCard = ({ plan }) => {
  return (
    <div className="min-w-[280px] h-full rounded-md font-semibold bg-white relative justify-between flex flex-col">
      <div className="w-full bg-gradient-to-b from-[#C167F6] to-[#5548C7] text-white flex flex-col items-center justify-center py-4 rounded-md gap-2">
        <div>{plan.name}</div>
        <div className="text-5xl">${plan.price}</div>
        <div>per month</div>
      </div>
      <div className="flex items-center justify-start flex-col py-8 gap-2 text-base font-normal text-[#6b7688]">
        {plan.features.map((feature) => (
          <div>{feature}</div>
        ))}
      </div>
      <div className="p-4 w-full">
        <button className=" bg-gradient-to-b from-[#C167F6] to-[#5548C7] w-full px-4 py-2 rounded text-base font-semibold text-white">
          Get Plan
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
