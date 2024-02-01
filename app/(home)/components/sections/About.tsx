import { CardList } from "../card-list";

const About = ({ sections }: any) => {
  return (
    <div className="flex flex-col items-center self-center py-10 text-gray-700">
      <div className="sm:w-2/3 2xl:w-full">
        <h1 className="flex justify-center self-center px-2 text-center text-3xl font-bold ">
          Breve texto para o Sobre mas se ficar muito grande ele quebra o
          espaçamento
        </h1>
      </div>
      {sections.map((item: any, index: any) => (
        <CardList
          key={index}
          headerLabel={item.title}
          headerTitle={item.content}
        />
      ))}
    </div>
  );
};

export default About;
