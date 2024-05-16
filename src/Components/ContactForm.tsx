import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const location = useLocation();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [color, setColor] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/civil-and-industrial":
        setColor("#2F4858");
        break;
      case "/solar-energy":
        setColor("#487288");
        break;
      case "/marine-services":
        setColor("#ECA72C");
        break;
      default:
        setColor("#2F4858");
    }
  }, [location.pathname]);
  const [selectedType, setSelectedType] = useState(1);
  const border = `border-[${color}]`;
  const bg = `bg-[${color}]`;
  const form = useRef<any>();
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_qwxrzdm", "template_ct5k6zu", form.current, {
        publicKey: "FL_lzrGz2_DG9O931",
      })
      .then(() => {
        setSent(true), setLoading(false);
        toast("Formularul a fost trimis !");
      })
      .catch(() => {
        setSent(false), setLoading(false);
        toast.error("A aparut o eroare la trimitere");
      });
  }
  return (
    <div className=" md:container mx-auto md:px-2 py-6 lg:pt-24" id="contact">
      <div className="grid col-span-1 xl:grid-cols-2">
        <div className="col-span-1 text-center place-content-center">
          <form
            action=""
            className="h-full"
            ref={form}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col items-center justify-between h-full max-w-[90vmin] mx-auto md:max-w-none">
              <span className="font-roboto text-xl tracking-tighter">
                Intră în legătură cu noi
              </span>
              <input
                type="radio"
                id="persoana_fizica"
                name="from_person_type"
                value="Persoana fizică"
                checked
                hidden
              />
              <input
                type="radio"
                id="persoana_juridica"
                name="from_person_type"
                value="Persoana Juridica"
                hidden
              />
              <div className="flex flex-row items-center justify-center my-8">
                <label
                  onClick={() => setSelectedType(1)}
                  htmlFor="persoana_fizica"
                  className={`rounded-[23.5px] border ${border} px-6 py-1.5 min-w-[167.38px] me-[6px] cursor-pointer ${
                    selectedType == 1 && `${bg} text-white`
                  }`}
                >
                  Persoană fizică
                </label>
                <label
                  onClick={() => setSelectedType(2)}
                  htmlFor="persoana_juridica"
                  className={`rounded-[23.5px] border ${border} px-6 py-1.5 min-w-[167.38px] ms-[6px] cursor-pointer whitespace-nowrap ${
                    selectedType == 2 && `${bg} text-white`
                  }`}
                >
                  Persoană juridică
                </label>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:w-[90%] w-full">
                {selectedType == 1 ? (
                  <input
                    placeholder="Nume Prenume"
                    required
                    minLength={3}
                    maxLength={36}
                    type="text"
                    name="from_name"
                    id="name"
                    className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:me-[6px]"
                  />
                ) : (
                  <input
                    placeholder="Nume Firma"
                    required
                    minLength={3}
                    maxLength={36}
                    type="text"
                    name="from_name"
                    id="name"
                    className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:me-[6px]"
                  />
                )}
                <input
                  placeholder="Email"
                  required
                  minLength={3}
                  maxLength={36}
                  type="email"
                  name="from_email"
                  id="email"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:ms-[6px] mt-6 sm:mt-0"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:w-[90%] mt-6 w-full">
                <input
                  placeholder="Telefon"
                  required
                  name="from_phone"
                  id="phone"
                  type="tel"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:me-[6px]"
                />
                <input
                  name="from_address"
                  placeholder="Adresă (opțional)"
                  type="text"
                  className="border border-[#2F4858] rounded-[5px] px-4 py-2 w-full sm:ms-[6px] mt-6 sm:mt-0"
                />
              </div>
              <textarea
                name="from_message"
                id="message"
                placeholder="Mesaj"
                className="max-h-[150px] min-h-[150px] sm:w-[90%] w-full mt-6 border border-[#2F4858] rounded-[5px] px-4 py-2"
              ></textarea>
              <button
                disabled={loading || sent}
                type="submit"
                className={`bg-[#2F4858] text-white px-8 py-2.5 rounded-[42px] mt-6 text-[13px] hover:${bg} w-full sm:w-min whitespace-nowrap`}
              >
                {loading ? "Se trimite" : sent ? "Trimis" : "Trimite"}
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1 hidden xl:block">
          <div className="flex items-center justify-center w-full">
            <img
              src="form-picture.avif"
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
