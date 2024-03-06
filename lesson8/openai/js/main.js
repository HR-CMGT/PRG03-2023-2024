window.addEventListener('load', init);

//Globals: @TODO Change URL to your own location
const apiBaseUrl = 'http://localhost/PRG03-voorbeeld/examples/week8-openai-php/webservice/';
let questionForm;
let questionInput;
let answerParagraph;
let imageRequestForm;
let imageRequestInput;
let imageSection;
let apiErrorMessage;
let speakButton;
const synth = window.speechSynthesis;

/**
 * Initialize after the DOM is ready
 */
function init() {
  //The ChatGPT question form
  questionForm = document.getElementById('chat-gpt-question-form');
  questionForm.addEventListener('submit', chatQuestionHandler);

  //The Dall-E generation form
  imageRequestForm = document.getElementById('dall-e-request-form');
  imageRequestForm.addEventListener('submit', imageGenerationHandler);

  //Elements needed in above 2 handlers
  questionInput = document.getElementById('question');
  answerParagraph = document.getElementById('answer');
  imageRequestInput = document.getElementById('image-request-text');
  imageSection = document.getElementById('images');
  apiErrorMessage = document.getElementById('api-error');

  //Specific button to use the Speech API of the browser to read the answer from ChatGPT
  speakButton = document.getElementById('speak-button');
  speakButton.addEventListener('click', speakAnswerClickHandler);

  //Enable this if you want to see all available models in your console
  // ajaxRequest(`${apiBaseUrl}?endpoint=models`, showAvailableModels);
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (typeof data.error !== 'undefined') {
        throw new Error(data.error.message);
      }
      successHandler(data);
    })
    .catch(ajaxErrorHandler);
}

/**
 * List the available models. For the current implementation fo the chat endpoint,
 * we're using 'gpt-3.5-turbo' following the docs of openAI
 *
 * @param data
 */
function showAvailableModels(data) {
  console.log(data);
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param message
 */
function ajaxErrorHandler(message) {
  apiErrorMessage.innerHTML = `Er is helaas iets fout gegaan met de API, met de volgende foutmelding: ${message}`;
}

/**
 * Send API request to Chat GPT with the input from the user
 *
 * @param e
 */
function chatQuestionHandler(e) {
  e.preventDefault();

  answerParagraph.appendChild(getLoaderElement());
  speakButton.setAttribute('disabled', 'disabled');
  ajaxRequest(`${apiBaseUrl}?endpoint=chat/completions&question=${encodeURIComponent(questionInput.value)}`, showChatResponse);
}

/**
 * Display the response from Chat GPT on the screen
 *
 * @param data
 */
function showChatResponse(data) {
  console.log(data);
  answerParagraph.innerHTML = data.choices[0].message.content.replace(/\n/g, '<br />');
  speakButton.removeAttribute('disabled');
}

/**
 * Speak the voice out loud. If you click the button again, it will cancel the current reading
 */
function speakAnswerClickHandler() {
  if (synth.speaking) {
    synth.cancel();
  } else {
    const msg = new SpeechSynthesisUtterance();
    msg.text = answerParagraph.innerText;
    msg.voice = synth.getVoices()[42]; //42 seems to be Dutch :)
    synth.speak(msg);
  }
}

/**
 * Send API request to Dall-E with the input from the user
 *
 * @param e
 */
function imageGenerationHandler(e) {
  e.preventDefault();

  imageSection.appendChild(getLoaderElement());
  ajaxRequest(`${apiBaseUrl}?endpoint=images/generations&prompt=${encodeURIComponent(imageRequestInput.value)}`, showGeneratedImages);
}

/**
 * Display the generated images on screen
 *
 * @param data
 */
function showGeneratedImages(data) {
  console.log(data);
  imageSection.innerHTML = '';
  for (const imageUrl of data.data) {
    const image = document.createElement('img');
    image.src = imageUrl.url;
    image.loading = 'lazy';
    imageSection.appendChild(image);
  }
}

/**
 * Simple loader to present while waiting for API results
 *
 * @returns {HTMLDivElement}
 */
function getLoaderElement() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  return loader;
}
