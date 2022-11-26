export interface Person {
  name: string;
  image: string;
  description: string;
}

const TeamEntry = ({ name, image, description }: Person) => {
  return (
    <div className="flex flex-row justify-center items-center my-4">
      <img
        src={image}
        alt={name}
        className="w-48 h-full rounded-lg object-fill object-center"
      />
      <div className="flex flex-col ml-4 py-8 w-1/4">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default TeamEntry;
