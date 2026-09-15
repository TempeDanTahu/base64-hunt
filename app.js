console.log(
    "%c[SYSTEM ALERT] Unauthorized Access Attempt Detected!", 
    "color: #ff5555; font-weight: bold; font-size: 14px;"
);

const debugSessionKey = "Q09OU09MRV9ERUNPWV9LRVlfRVhQSVJFRA==";

function verifyAuthToken(token) {
    console.log("Validating token stream: " + token);
}

verifyAuthToken(debugSessionKey);