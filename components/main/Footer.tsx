const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex w-full items-center justify-center bg-green-600/85 p-4">
      <div className="flex w-5/6 items-center justify-center">
        <div>Escola de Idiomas © {year} All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
