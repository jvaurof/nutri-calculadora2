import { CLASSIFICATION_COLOR, CLASSIFICATION_TEXT } from '../constants';

export function imcClassification(result) {
  if (result < 16) {
    return {
      classificationColor: CLASSIFICATION_COLOR.SERIOUS,
      classificationText: CLASSIFICATION_TEXT.IMC.SEVERE_MALNUTRITION,
    }
  }

  if (result >= 16 && result < 17) {
    return {
      classificationColor: CLASSIFICATION_COLOR.MODERATE,
      classificationText: CLASSIFICATION_TEXT.IMC.MILD_MALNUTRITION,
    }
  }

  if (result >= 17 && result < 18.6) {
    return {
      classificationColor: CLASSIFICATION_COLOR.LIGHT,
      classificationText: CLASSIFICATION_TEXT.IMC.MILD_MALNUTRITION,
    }
  }

  if (result >= 18.6 && result < 25) {
    return {
      classificationColor: CLASSIFICATION_COLOR.OK,
      classificationText: CLASSIFICATION_TEXT.IMC.EUTROPHY,
    }
  }

  if (result >= 25 && result < 30) {
    return {
      classificationColor: CLASSIFICATION_COLOR.MODERATE,
      classificationText: CLASSIFICATION_TEXT.IMC.OVERWEIGHT,
    }
  }

  if (result >= 30) {
    return {
      classificationColor: CLASSIFICATION_COLOR.SERIOUS,
      classificationText: CLASSIFICATION_TEXT.IMC.OBESITY,
    }
  }
}
