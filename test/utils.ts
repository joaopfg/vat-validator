import { Country } from '../src/country';

export const validVats: { country: Country; vat: string }[] = [
  { vat: 'IT00743110157', country: Country.Italy },
  { vat: 'NL999999999B01', country: Country.Netherlands },
  { vat: 'PL9999999999', country: Country.Poland },
  { vat: 'PL999-999-99-99', country: Country.Poland },
  { vat: 'PL999-99-99-999', country: Country.Poland },
  { vat: 'SK2022749619', country: Country.Slovakia },
  { vat: 'SI99999999', country: Country.Slovenia },
  { vat: 'ESX99999999', country: Country.Spain },
  { vat: 'ESX9999999R', country: Country.Spain },
  { vat: 'SE999999999901', country: Country.Sweden },
  { vat: 'K99999999L', country: Country.Albania },
  { vat: 'L99999999G', country: Country.Albania },
  { vat: '83914571673', country: Country.Australia },
  { vat: '123456789', country: Country.Canada },
  { vat: '91310000717860841G', country: Country.China },
  { vat: '123456', country: Country.Iceland },
  { vat: '22AAAAA0000A1Z5', country: Country.India },
  { vat: '022718241413000', country: Country.Indonesia },
  { vat: '514646454', country: Country.Israel },
  { vat: '99999999', country: Country.NewZealand },
  { vat: '999999999', country: Country.NewZealand },
  { vat: '01012345-0001', country: Country.Nigeria },
  { vat: 'MK4032013544513', country: Country.NorthMacedonia },
  { vat: '123456785', country: Country.Norway },
  { vat: '123456789012', country: Country.Philippines },
  { vat: '123456788', country: Country.Serbia },
  { vat: '04595257', country: Country.Taiwan },
  { vat: 'GB999 9999 73', country: Country.UnitedKingdom },
  { vat: 'GB999999973 999', country: Country.UnitedKingdom },
  { vat: 'GBGD001', country: Country.UnitedKingdom },
  { vat: 'GBHA599', country: Country.UnitedKingdom },
  { vat: 'GB009 9999 73', country: Country.IsleOfMan },
  { vat: 'GB009999973 999', country: Country.IsleOfMan },
  { vat: 'GBGD001', country: Country.IsleOfMan },
  { vat: 'GBHA599', country: Country.IsleOfMan },
  { vat: '200000001', country: Country.Uzbekistan },
  { vat: '799999999', country: Country.Uzbekistan },
  { vat: '82304249000155', country: Country.Brazil },
  { vat: '23500580009', country: Country.Brazil },
  { vat: '18609823-4', country: Country.Chile },
  { vat: '12391279-9', country: Country.Chile },
  { vat: '623456789-1', country: Country.Colombia },
  { vat: '101850043', country: Country.DominicanRepublic },
  { vat: '0614-050707-104-8', country: Country.ElSalvador },
  { vat: '0614-241287-102-5', country: Country.ElSalvador },
  { vat: '1234567-1', country: Country.Guatemala },
  { vat: 'GODE561231GR8', country: Country.Mexico },
  { vat: 'MAB9307148T4', country: Country.Mexico },
  { vat: '80028061-0', country: Country.Paraguay },
  { vat: '20512333797', country: Country.Peru },
  { vat: '211003420017', country: Country.Uruguay },
  { vat: 'V-114702834', country: Country.Venezuela },
  { vat: 'FR40303265045', country: Country.France },
  { vat: 'FR23334175221', country: Country.France },
  { vat: 'ATU13585627', country: Country.Austria },
  { vat: '516179157', country: Country.Israel },
  { vat: 'CHE-107.787.577 IVA', country: Country.Switzerland },
];

export const invalidVats: { country: Country; vat: string }[] = [
  { vat: '12345', country: Country.Albania },
];

export const validVatsArray = ['22150'];

export const invalidVatsArray = ['1YUIY65465HGFHYIUY6656'];
