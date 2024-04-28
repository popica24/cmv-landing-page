type FooterItemProps = {
  ImagePath: string;
  WhiteText: string;
  OrangeText: string;
};

const Footer = () => {
  return (
    <div className="bg-[#2F4858] py-8 lg:px-44 lg:py-12">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <FooterItem
          ImagePath="Globe.svg"
          WhiteText="Pitesti, Romania"
          OrangeText="Locatia noastra"
        />
        <FooterItem
          ImagePath="Mail.svg"
          WhiteText="contact@cmvelectric.ro"
          OrangeText="Mail-ul nostru"
        />
        <FooterItem
          ImagePath="Phone.svg"
          WhiteText="+40 757 739 754"
          OrangeText="Telefonul nostru"
        />
      </div>
      <span className="text-white flex items-center justify-center text-sm lg:text-[17.5px] pt-12 flex-col">
        © 2024 CMV ELECTRIC SOLUTION. Toate drepturile rezervate.
        <p className="text-[#005FB7]"> Politica de Confidențialitate </p>
        <p className="text-[#005FB7]">Termeni și Condiții</p>
      </span>
    </div>
  );
};
const FooterItem = (props: FooterItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-2 lg:my-0">
      <img src={props.ImagePath} alt={props.OrangeText} />
      <span className="text-white text-lg my-2">{props.WhiteText}</span>
      <span className="text-[#F26100] text-base">{props.OrangeText}</span>
    </div>
  );
};
export default Footer;
