import { Button } from "@/components/ui/button";
import { CardList } from "../components/card-list";

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
    <div className="py-10">
      <h1 className="flex justify-center self-center px-2 text-center text-3xl font-bold">
        Breve texto para o Sobre mas se ficar muito grande ele quebra o
        espaçamento
      </h1>
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
