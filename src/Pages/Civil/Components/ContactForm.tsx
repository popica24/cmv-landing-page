import { useState } from "react";

const ContactForm = () => {
  const [selectedType, setSelectedType] = useState(1);
  return (
    <div className="container mx-auto px-2 py-6 lg:pt-24">
      <div className="grid col-span-1 xl:grid-cols-2">
        <div className="col-span-1 text-center place-content-center">
          <form action="" className="h-full">
            <div className="flex flex-col items-center justify-between h-full">
              <span className="font-roboto text-xl tracking-tighter">
                Intră în legătură cu noi
              </span>
              <input
                type="radio"
                id="persoana_fizica"
                name="person_type"
                value="Persoana fizică"
                checked
                hidden
              />
              <input
                type="radio"
                id="persoana_juridica"
                name="person_type"
                value="Persoana Juridica"
                hidden
              />
              <div className="flex flex-row items-center justify-center my-8">
                <label
                  onClick={() => setSelectedType(1)}
                  htmlFor="persoana_fizica"
                  className={`rounded-[23.5px] border border-[#F26100] px-6 py-1.5 min-w-[167.38px] me-[6px] cursor-pointer ${
                    selectedType == 1 && "bg-[#F26100] text-white"
                  }`}
                >
                  Persoana fizică
                </label>
                <label
                  onClick={() => setSelectedType(2)}
                  htmlFor="persoana_juridica"
                  className={`rounded-[23.5px] border border-[#F26100] px-6 py-1.5 min-w-[167.38px] ms-[6px] cursor-pointer whitespace-nowrap ${
                    selectedType == 2 && "bg-[#F26100] text-white"
                  }`}
                >
                  Persoana juridică
                </label>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:w-[90%] w-full">
                <input
                  placeholder="Nume Prenume"
                  required
                  minLength={3}
                  maxLength={36}
                  type="text"
                  name="name"
                  id="name"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:me-[6px]"
                />
                <input
                  placeholder="Email"
                  required
                  minLength={3}
                  maxLength={36}
                  type="email"
                  name="email"
                  id="email"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:ms-[6px] mt-6 sm:mt-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:w-[90%] mt-6 w-full">
                <input
                  placeholder="Telefon"
                  required
                  name="phone"
                  id="phone"
                  type="tel"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:me-[6px]"
                />
                <input
                  placeholder="Adresă (opțional)"
                  type="text"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:ms-[6px] mt-6 sm:mt-0"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Mesaj"
                className="max-h-[150px] min-h-[150px] sm:w-[90%] w-full mt-6 border border-[#2F4858] rounded-[5px] px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="bg-[#2F4858] text-white px-8 py-2.5 rounded-[42px] mt-6 text-[13px] hover:bg-[#F26100] w-full sm:w-min"
              >
                Trimite
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 hidden xl:block">
          <div className="flex items-center justify-center w-full">
            <img
              src="form-picture.jpeg"
              alt="Contact us !"
              className="max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
