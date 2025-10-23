interface IProps {
  description?: string;
  subdescription?: string;
}

export const CardsAdmin = ({ description, subdescription }: IProps) => {
  return (
    <div className="w-full h-28 bg-[#313640] rounded-2xl p-5">
      <h1>{description}</h1>
      <h1>{subdescription}</h1>
    </div>
  );
};
