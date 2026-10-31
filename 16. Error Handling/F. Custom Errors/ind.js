//F. Custom Errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);              // sets message, stack
    this.name = "ValidationError";
    this.field = field;          // extra info of our own
  }
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("Age must be a number", "age");
  }
  if (age < 0) {
    throw new ValidationError("Age cannot be negative", "age");
  }
  return true;
}

try {
  validateAge(-5);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`${err.name} on "${err.field}": ${err.message}`);
    // ValidationError on "age": Age cannot be negative
  } else {
    throw err;                   // unknown error, re-throw
  }
}

//G. Quick summary


/*
Keyword	Job
try	Wrap code that might fail
catch	Handle the error if one occurs
finally	Cleanup that always runs
throw	Raise your own error
Custom Error	class X extends Error for specific failure types
*/