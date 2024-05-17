import { Country } from './country';

export const countryRegexMap: Map<Country, string> = new Map([
  [Country.Albania, String.raw`^[J-KL-M]\d{8}[A-Z]$`],
  [Country.Argentina, String.raw`^\d{11}$`],
  [Country.Australia, String.raw`^\d{11}$`],
  [Country.Austria, String.raw`^ATU\d{8}$`],
  [Country.Belarus, String.raw`^\d{9}$`],
  [Country.Belgium, String.raw`^(BE0?|BE1)\d{8}(?:(?<=\d)(\d{2})|(?<=\d)(\d{1})X)$`],
  [Country.Belize, String.raw`^\d{6}$`],
  [Country.Bolivia, String.raw`^\d{7}$`],
  [Country.BosniaHerzegovina, String.raw`^\d{12,13}$`],
  [Country.Brazil, String.raw`^\d{11}|\d{14}$`],
  [Country.Bulgaria, String.raw`^BG\d{9,10}$`],
  [Country.Canada, String.raw`^\d{9}$`],
  [Country.Chile, String.raw`^\d{8}-[0-9K]$`],
  [Country.China, String.raw`^[a-zA-Z0-9]{18}$`],
  [Country.Colombia, String.raw`^\d{9}-[0-9]$`],
  [Country.CostaRica, String.raw`^(\d{9,12})$`],
  [Country.Croatia, String.raw`^HR\d{11}$`],
  [Country.Cyprus, String.raw`^CY\d{8}[A-Z]$`],
  [Country.CzechRepublic, String.raw`^CZ\d{8,10}$`],
  [Country.Denmark, String.raw`^DK\d{8}$`],
  [Country.DominicanRepublic, String.raw`^[145][0-9]{8}$`],
  [Country.Ecuador, String.raw`^\d{13}$`],
  [Country.ElSalvador, String.raw`^\d{4}-\d{6}-\d{3}-\d$`],
  [Country.Estonia, String.raw`^EE\d{9}$`],
  [Country.Finland, String.raw`^FI\d{7}$`],
  [Country.France, String.raw`^FR\d{11}$`],
  [Country.Germany, String.raw`^DE\d{9}$`],
  [Country.Greece, String.raw`^EL\d{9}$`],
  [Country.Guatemala, String.raw`^\d{7}-\d$`],
  [Country.Hungary, String.raw`^HU\d{8}$`],
  [Country.Iceland, String.raw`^\d{5,6}$`],
  [Country.India, String.raw`^[a-zA-Z0-9]{15}$`],
  [Country.Indonesia, String.raw`^\d{15,16}$`],
  [Country.Ireland, String.raw`^IE(\d{7}[A-Z]|(\d{7}[A-Z]{2}))$`],
  [Country.IsleOfMan, String.raw`^GB(\d{3} \d{4} \d{2}|\d{9}|\d{9} \d{3}|GD([0-4][0-9]{2})|HA([5-9][0-9]{2}))$`],
  [Country.Israel, String.raw`^\d{9}$`],
  [Country.Italy, String.raw`^IT\d{11}$`],
  [Country.Japan, String.raw`^\d{13}$`],
  [Country.Kazakhstan, String.raw`^\d{12}$`],
  [Country.Latvia, String.raw`^LV\d{11}$`],
  [Country.Lithuania, String.raw`^LT\d{9}(\d{3})?$`],
  [Country.Luxembourg, String.raw`^LU\d{8}$`],
  [Country.Malta, String.raw`^MT\d{8}$`],
  [Country.Mexico, String.raw`^[A-Z&Ñ]{3,4}\d{6}[0-9A-Z]{3}$`],
  [Country.Monaco, String.raw`^FR\d{11}$`],
  [Country.Netherlands, String.raw`^NL\d{9}B\d{2}$`],
  [Country.NewZealand, String.raw`^\d{8,9}$`],
  [Country.Nicaragua, String.raw`^\d{3}-\d{6}-\d{4}[A-Za-z]$`],
  [Country.Nigeria, String.raw`^\d{8}-\d{4}$`],
  [Country.NorthMacedonia, String.raw`^MK\d{13}$`],
  [Country.Norway, String.raw`^\d{9}$`],
  [Country.Paraguay, String.raw`^\d{6,8}-\d$`],
  [Country.Peru, String.raw`^\d{11}$`],
  [Country.Philippines, String.raw`^\d{12}$`],
  [Country.Poland, String.raw`^PL(?:\d{3}-\d{3}-\d{2}-\d{2}|\d{3}-\d{2}-\d{2}-\d{3}|\d{10})$`],
  [Country.Portugal, String.raw`^PT\d{9}$`],
  [Country.Romania, String.raw`^RO\d{2,10}$`],
  [Country.Russia, String.raw`^\d{10}(?:\d{2})?$`],
  [Country.SanMarino, String.raw`^\d{5}$`],
  [Country.SaudiArabia, String.raw`^\d{15}$`],
  [Country.Serbia, String.raw`^\d{9}$`],
  [Country.Slovakia, String.raw`^SK\d{10}$`],
  [Country.Slovenia, String.raw`^SI\d{8}$`],
  [Country.Spain, String.raw`^ES[A-Z]\d{7}[A-Z0-9]$`],
  [Country.Sweden, String.raw`^SE\d{12}$`],
  [Country.Switzerland, String.raw`^CHE-\d{3}\.\d{3}\.\d{3}\s(?:MWST|TVA|IVA)$`],
  [Country.Taiwan, String.raw`^\d{8}$`],
  [Country.Turkey, String.raw`^\d{10}$`],
  [Country.Ukraine, String.raw`^\d{12}$`],
  [Country.UnitedKingdom, String.raw`^GB(\d{3} \d{4} \d{2}|\d{9}|\d{9} \d{3}|GD([0-4][0-9]{2})|HA([5-9][0-9]{2}))$`],
  [Country.Uruguay, String.raw`^\d{8}001\d$`],
  [Country.Uzbekistan, String.raw`^[24-7]\d{8}$`],
  [Country.Venezuela, String.raw`^(J|G|V|E)-\d{9}$`],
]);
