## Security

### Preventing cross-site scripting (XSS):

- HTML is used when interpreting a value as HTML, for example, when binding to innerHtml.
- Style is used when binding CSS into the style property.
- URL is used for URL properties, such as <a href>.
- Resource URL is a URL that will be loaded and executed as code, for example, in <script src>.

To mark a value as trusted, inject `DomSanitizer` and call one of the following methods:

- bypassSecurityTrustHtml
- bypassSecurityTrustScript
- bypassSecurityTrustStyle
- bypassSecurityTrustUrl
- bypassSecurityTrustResourceUrl

constructor(private sanitizer: DomSanitizer) {
  // javascript: URLs are dangerous if attacker controlled.
  // Angular sanitizes them in data binding, but you can
  // explicitly tell Angular to trust this value:
  this.dangerousUrl = 'javascript:alert("Hi there")';
  this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);


### To enable CSP, configure your web server to return an appropriate Content-Security-Policy HTTP header

### Use the AOT template compiler

### Cross-site request forgery CSRF

In a common anti-XSRF technique, the application server sends a randomly generated authentication token in a cookie. The client code reads the cookie and adds a custom request header with the token in all subsequent requests. The server compares the received cookie value to the request header value and rejects the request if the values are missing or don't match.

This technique is effective because all browsers implement the same origin policy. Only code from the website on which cookies are set can read the cookies from that site and set custom headers on requests to that site. That means only your application can read this cookie token and set the custom header. The malicious code on evil.com can't.

### Cross-site script inclusion (XSSI)

Cross-site script inclusion, also known as JSON vulnerability, can allow an attacker's website to read data from a JSON API. The attack works on older browsers by overriding native JavaScript object constructors, and then including an API URL using a <script> tag.

***



