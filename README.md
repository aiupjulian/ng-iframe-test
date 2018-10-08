# iframe test

To get the url from the iframe:

```window.frames['childs'].contentWindow.location.href```

Inside the HTML folder is an example for same origin.
Run with:

```http-server -p 8080 -c-1 html/```

## Conclusion: Interacting with iframe only works for same origin (protocol, domain, port)

### Run chrome with security disabled (NO)

- cd C:\Program Files (x86)\Google\Chrome\Application

- chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security

### Modify Headers (NO)

- Origin (request header)

- Access-Control-Allow-Origin (response header)

### Add Access-Control-Allow-Origin to server response testing in express (NO)

- Add cors package
