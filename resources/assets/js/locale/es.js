import {
  Validator
} from 'vee-validate';
const dictionary = {
  es: {
    attributes: {
      days: 'días',
      start: 'inicio',
      end: 'fin',
      key: 'llave',
      description: 'descripción',
      value: 'valor',
      percentage: 'porcentaje',
      since: 'desde',
      until: 'hasta',
      excess: 'exceso',
      fee: 'cuota fija'
    }
  }
};

Validator.updateDictionary(dictionary);
