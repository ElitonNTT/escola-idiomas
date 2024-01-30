import { CardList } from "../card-list";

const About = () => {
  const texts = [
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
    {
      titulo: "Desafio",
      description:
        "Você é um analista de marketing, seja ele social, conteúdo, planejamento ou performance. Sente que precisa expandir sua visão e entender os diversos elementos que impactam suas campanhas?",
    },
  ];

  return (
    <div className="flex flex-col items-center self-center py-10 text-gray-700">
      <div className="sm:w-2/3 2xl:w-full">
        <h1 className="flex justify-center self-center px-2 text-center text-3xl font-bold ">
          Breve texto para o Sobre mas se ficar muito grande ele quebra o
          espaçamento
        </h1>
      </div>
      {texts.map((item, index) => (
        <CardList
          key={index}
          headerLabel={item.description}
          headerTitle={item.titulo}
        />
      ))}
    </div>
  );
};

export default About;
