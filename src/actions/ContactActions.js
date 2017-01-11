import dispatcher from "../dispatcher";

export function sendEmail(data) {
  return fetch('/contact', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(checkStatus)
    .then(()=>console.log('sent email'))
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    dispatcher.dispatch({type: "SUBMITTED_FORM"});
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
