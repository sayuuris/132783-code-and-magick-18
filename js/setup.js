'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOUR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLOUR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS = 4;

var getRandomWizard = function () {
  var result = [];
  for (var i = 1; i <= WIZARDS; i++) {
    result.push({
      randWizard: {
        name: (WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)]) + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
        coatColor: COAT_COLOUR[Math.floor(Math.random() * COAT_COLOUR.length)],
        eyesColor: EYES_COLOUR[Math.floor(Math.random() * EYES_COLOUR.length)]
      }
    });
  }
  return result;
};
var randomWizard = getRandomWizard();
var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < randomWizard.length; i++) {
  fragment.appendChild(renderWizard((randomWizard)));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
