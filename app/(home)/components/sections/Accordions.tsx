import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="py-10 text-gray-700">
      <h1 className="flex justify-center self-center text-center text-3xl font-bold">
        Lista de idiomas disponiveis
      </h1>
      <Accordion
        type="single"
        collapsible
        className="mb-4 flex flex-col items-center justify-around"
      >
        {texts.map((item, index) => (
          <AccordionItem
            value={"item" + index}
            key={index}
            className="w-5/6 text-justify md:w-3/5"
          >
            <AccordionTrigger className="text-2xl font-bold">
              {item.titulo}
            </AccordionTrigger>
            <AccordionContent className="text-lg font-medium">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default About;
