interface Props {
  title: string;
  children?: React.ReactNode;
  link: string;
}

const MoreInfoCard = ({ title, children, link }: Props) => {
  return (
    <div className="bg-blue-800 w-1/6 h-2/3 2xl:3/5 m-6">
      <div className="flex flex-col h-full items-center justify-evenly px-8">
        <h1 className="2xl:text-4xl text-2xl font-bold text-white pt-6 text-center mb-2">
          {title}
        </h1>
        {children}
        <a
          href={link}
          className="text-white bg-blue-400 text-xs hover:bg-blue-600 py-2 px-4 m-4 2xl:py-4 2xl:px-8 2xl:m-4"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default MoreInfoCard;
