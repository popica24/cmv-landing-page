const IndustrialBulding = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-20">
      <span className="text-[#F26100] font-semibold slide-from-bottom">
        Servici
      </span>
      <span className="font-bold text-[20px] fadeIn">Imobiliare</span>
      <div className="flex flex-row items-center justify-center pt-12">
        <img
          src="civil.jpeg"
          alt=""
          width={450}
          height={260}
          className="rounded-tl-[30px] rounded-br-[30px]"
        />
        <div className="flex flex-col items-start w-full ms-12">
          <span className="font-semibold text-[25px] flip">
            Construcții de case și apartamente
          </span>
          <div className="py-1 my-4 bg-[#F26100] loading-bar"></div>
          <p className="max-w-[78ch] font-medium delayedfadeIn">
            Casa sau apartamentul pe care îl construiți nu este doar un simplu
            proiect de construcție, ci un vis materializat. De aceea, suntem
            dedicați să vă oferim experiența și expertiza noastră în construcții
            pentru a transforma visul dumneavoastră în realitate. Cu ani de
            experiență în domeniul construcțiilor, ne-am angajat să aducem
            calitate, inovație și atenție la detalii în fiecare proiect pe care
            îl realizăm. Indiferent dacă doriți să construiți o casă de familie
            confortabilă sau un complex de apartamente modern, echipa noastră de
            profesioniști calificați este aici pentru a vă ghida în fiecare pas
            al procesului.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialBulding;
