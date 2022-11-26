interface Props {
  title: string;
  children?: React.ReactNode;
  link: string;
}

const MoreInfoCard = ({ title, children, link }: Props) => {
  return (
    <div className="bg-blue-700 w-1/3 h-2/3 m-6">
      <div className="flex flex-col items-center justify-center m-6 space-y-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {children}
        <a href={link} className="text-white">
          More Info
        </a>
      </div>
    </div>
  );
};

export default MoreInfoCard;
