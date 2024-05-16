import { FormEvent, useRef, useState } from "react";
import { useConfigurator } from "../../../../Context/ConfiguratorContext";
import Headline from "../Components/Headline";
import Input from "../Components/Input";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const InstallPlace = () => {
  const {
    MonthlyConsumption,
    YearlyConsumption,
    TrifasedSystem,
    RoofType,
    RoofMaterial,
    RoofOrientation,
    setName,
    Name,
    setEmail,
    Email,
    setCity,
    City,
    setStreet,
    Street,
    setPhone,
    Phone,
    setPostalcode,
    Postalcode,
    setMessage,
    Message,
  } = useConfigurator();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<any>();
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_qwxrzdm", "template_854ekf6", form.current, {
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
    <>
      <div
        className="flex flex-col md:flex-row justify-center  mx-auto max-w-[90vmin] xl:max-w-[1150px] px-[2vw] xl:px-[5vw] py-[5vh] rounded-[30px] bg-white"
        style={{ boxShadow: "0 3px 6px rgba(0, 0, 0, .161)" }}
      >
        <div className="flex flex-col justify-center md:justify-between items-stretch md:items-start w-full">
          <Headline title="Pasul 3" subtitle="locatie" />

          <span className="text-black font-medium text-[16px] xl:text-[20px] mb-5">
            Specifică locul instalării
          </span>
          <div className="w-full px-[5vw]">
            <div className="flex flex-col xl:flex-row items-center justify-center ">
              <Input
                onChange={setName}
                placeholder="Nume Prenume / Societate"
                label="Nume Prenume / Societate"
                type="text"
                className="xl:me-10"
              />
              <Input
                onChange={setEmail}
                placeholder="Email"
                label="Email"
                type="text"
                className="xl:ms-10"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center xl:mt-10">
              <Input
                onChange={setCity}
                placeholder="Oras"
                label="Oras"
                type="text"
                className="xl:me-10"
              />
              <Input
                onChange={setStreet}
                placeholder="Strada"
                label="Strada"
                type="text"
                className="xl:ms-10"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-center justify-center xl:mt-10">
              <Input
                onChange={setPhone}
                placeholder="Telefon"
                label="Telefon"
                type="text"
                className="xl:me-10"
              />
              <Input
                onChange={setPostalcode}
                placeholder="Cod postal (optional)"
                label="Cod postal (optional)"
                type="number"
                className="xl:ms-10"
              />
            </div>

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesaj"
              name=""
              id=""
              className="w-full min-h-[100px] max-h-[100px] border focus:border-gray-500 outline-none transition-colors p-3 text-sm my-2 xl:mt-10"
            ></textarea>

            <form action="" onSubmit={(e) => handleSubmit(e)} ref={form}>
              <input
                type="hidden"
                name="from_monthly"
                value={MonthlyConsumption}
              />
              <input
                type="hidden"
                name="from_yearly"
                value={YearlyConsumption}
              />
              <input
                type="hidden"
                name="from_trifased"
                value={TrifasedSystem.toString()}
              />
              <input type="hidden" name="from_rooftype" value={RoofType} />
              <input
                type="hidden"
                name="from_roofmaterial"
                value={RoofMaterial}
              />
              <input
                type="hidden"
                name="from_orientation"
                value={RoofOrientation}
              />
              <input type="hidden" name="from_name" value={Name} />
              <input type="hidden" name="from_email" value={Email} />
              <input type="hidden" name="from_city" value={City} />
              <input type="hidden" name="from_street" value={Street} />
              <input type="hidden" name="from_phone" value={Phone} />
              <input type="hidden" name="from_postalcode" value={Postalcode} />
              <input type="hidden" name="from_message" value={Message} />
              <button
                disabled={sent || loading}
                className={`bg-[#487288]  ${
                  sent ? "cursor-default" : "hover:bg-[#2a4350]"
                } transition-colors duration-300 rounded-full text-white py-[15px] px-[30px] text-sm md:text-base xl:text-xl font-bold w-full`}
              >
                {loading ? "Se trimite" : sent ? "Trimis" : "Trimite"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallPlace;
