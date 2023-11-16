export interface LanguageDataInterface {
  language: string;
  id: string;
  code_url: string;
  tested: boolean;
  checked: boolean;
  source: string;
}

export interface AlgorithmDatainterface {
  label: string;
  id: string;
  languages: Array<LanguageDataInterface>;
}

export interface ResponseDataInterface {
  algorithms: Array<AlgorithmDatainterface>;
}

export default ResponseDataInterface;
