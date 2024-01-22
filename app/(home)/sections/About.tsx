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
    <div className="py-4">
      <h1 className="mb-4 flex justify-center self-center text-4xl font-bold">
        Por que fazer o MBA em Marketing e Estratégias Digitais?
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
