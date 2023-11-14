interface LanguageDataInterface {
  language: string;
  id: string;
  code_url: string;
}

interface AlgorithmDatainterface {
  label: string;
  id: string;
  languages: Array<LanguageDataInterface>;
}

interface ResponseDataInterface {
  algorithms: Array<AlgorithmDatainterface>;
}

export default ResponseDataInterface;
