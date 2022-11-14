const notifyByEmail = (email) => {
  return `Email sent to ${email}`
}

const notifyByText = (phone_number) => {
  return `Text sent to ${phone_number}`
}

const notify = (method, notifyFunction) => {
  return notifyFunction(method)
}

// notify('hello@makers.tech.test', notifyByEmail);
// notify('+10000000000', notifyByText);