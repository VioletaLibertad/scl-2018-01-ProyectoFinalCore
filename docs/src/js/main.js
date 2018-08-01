/* Global Variables */
let rut, email, licensePlate, host, goingTo, visitPurpose;

/* Functionality Buttons */
newRegistrationBtn.addEventListener('click', () => {
  starterPage.classList.add('disappear');
  starterPage.classList.remove('show');
  personalUserInfo.classList.remove('disappear');
  personalUserInfo.classList.add('show');
});

findRegistrationBtn.addEventListener('click', () => {
  starterPage.classList.add('disappear');
  starterPage.classList.remove('show');
  frequentVisitor.classList.remove('disappear');
  frequentVisitor.classList.add('show');
});

firstBackBtn.addEventListener('click', () => {
  personalUserInfo.classList.remove('show');
  personalUserInfo.classList.add('disappear');
  starterPage.classList.remove('disappear');
  starterPage.classList.add('show');
});

firstForwardBtn.addEventListener('click', () => {
  personalUserInfo.classList.remove('show');
  personalUserInfo.classList.add('disappear');
  purposeUserInfo.classList.remove('disappear');
  purposeUserInfo.classList.add('show');
  saveGlobalVariables();
});

secondBackBtn.addEventListener('click', () => {
  purposeUserInfo.classList.remove('show');
  purposeUserInfo.classList.add('disappear');
  personalUserInfo.classList.remove('disappear');
  personalUserInfo.classList.add('show');
});

secondForwardBtn.addEventListener('click', () => {
  purposeUserInfo.classList.remove('show');
  purposeUserInfo.classList.add('disappear');
  textConditions.classList.remove('disappear');
  textConditions.classList.add('show');
  saveGlobalVariables();
});

acceptTerms.addEventListener('click', () => {
  textConditions.classList.remove('show');
  textConditions.classList.add('disappear');
  arrivalNotification.classList.remove('disappear');
  arrivalNotification.classList.add('show');
  currentVisitorRegistration();
});

thirdBackBtn.addEventListener('click', () => {
  frequentVisitor.classList.remove('show');
  frequentVisitor.classList.add('disappear');
  starterPage.classList.remove('disappear');
  starterPage.classList.add('show');
});

thirdForwardBtn.addEventListener('click', () => {
  frequentVisitor.classList.remove('show');
  frequentVisitor.classList.add('disappear');
  arrivalNotification.classList.remove('disappear');
  arrivalNotification.classList.add('show');
});

function saveGlobalVariables() {
  rutVisitor.value = rut;
  emailVisitor.value = email;
  licensePVisitor.value = licensePlate;
  localHost.value = host;
  business.value = goingTo;
  purposeOfVisit.value = visitPurpose;
}

window.currentVisitorRegistration();