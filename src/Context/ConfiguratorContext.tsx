import { createContext, useContext, FC, useState } from "react";

type ConfiguratorProviderProps = {
  children: React.ReactNode;
};

type ConfiguratorContextProps = {
  MonthlyConsumption: string;
  setMonthlyConsumption: React.Dispatch<React.SetStateAction<string>>;
  YearlyConsumption: string;
  setYearlyConsumption: React.Dispatch<React.SetStateAction<string>>;
  TrifasedSystem: boolean;
  setTrifasedSystem: React.Dispatch<React.SetStateAction<boolean>>;
  RoofType: string;
  setRoofType: React.Dispatch<React.SetStateAction<string>>;
  RoofMaterial: string;
  setRoofMaterial: React.Dispatch<React.SetStateAction<string>>;
  RoofOrientation: string;
  setRoofOrientation: React.Dispatch<React.SetStateAction<string>>;
  Name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  Email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  City: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  Street: string;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  Phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  Postalcode: string;
  setPostalcode: React.Dispatch<React.SetStateAction<string>>;
  Message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};

const ConfiguratorContext = createContext<ConfiguratorContextProps>({
  MonthlyConsumption: "",
  setMonthlyConsumption: () => {},
  YearlyConsumption: "",
  setYearlyConsumption: () => {},
  TrifasedSystem: false,
  setTrifasedSystem: () => {},
  RoofType: "",
  setRoofType: () => {},
  RoofMaterial: "",
  setRoofMaterial: () => {},
  RoofOrientation: "",
  setRoofOrientation: () => {},
  Name: "",
  setName: () => {},
  Email: "",
  setEmail: () => {},
  City: "",
  setCity: () => {},
  Street: "",
  setStreet: () => {},
  Phone: "",
  setPhone: () => {},
  Postalcode: "",
  setPostalcode: () => {},
  Message: "",
  setMessage: () => {},
});

export const ConfiguratorProvider: FC<ConfiguratorProviderProps> = ({
  children,
}) => {
  const [MonthlyConsumption, setMonthlyConsumption] = useState<string>("");
  const [YearlyConsumption, setYearlyConsumption] = useState<string>("");
  const [TrifasedSystem, setTrifasedSystem] = useState<boolean>(false);
  const [RoofType, setRoofType] = useState<string>("");
  const [RoofMaterial, setRoofMaterial] = useState<string>("");
  const [RoofOrientation, setRoofOrientation] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [City, setCity] = useState<string>("");
  const [Street, setStreet] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [Postalcode, setPostalcode] = useState<string>("");
  const [Message, setMessage] = useState<string>("");

  return (
    <ConfiguratorContext.Provider
      value={{
        MonthlyConsumption,
        setMonthlyConsumption,
        YearlyConsumption,
        setYearlyConsumption,
        TrifasedSystem,
        setTrifasedSystem,
        RoofType,
        setRoofType,
        RoofMaterial,
        setRoofMaterial,
        RoofOrientation,
        setRoofOrientation,
        Name,
        setName,
        Email,
        setEmail,
        City,
        setCity,
        Street,
        setStreet,
        Phone,
        setPhone,
        Postalcode,
        setPostalcode,
        Message,
        setMessage,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => useContext(ConfiguratorContext);
