interface Props {
  title: string;
  children?: React.ReactNode;
  link: string;
}

const MoreInfoCard = ({ title, children, link }: Props) => {
  return (
    <div className="bg-blue-700 w-1/6 h-3/5 m-6">
      <div className="flex flex-col h-full items-center justify-around px-8">
        <h1 className="md:text-4xl text-2xl font-bold text-white pt-6">{title}</h1>
        {children}
        <a href={link} className="text-white">
          More Info
        </a>
      </div>
    </div>
  );
};

export default MoreInfoCard;
