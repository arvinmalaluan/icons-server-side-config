# API Documentation

Greetings! We're thrilled to have you explore our API documentation. This comprehensive guide is designed to provide detailed insights into every available endpoint, their specific purposes, the corresponding HTTP methods, and the expected payload for seamless integration with our services. Let's dive in and discover how our API can empower your applications!

**Note:** This uses url path `base_url/api/v1`

## Endpoints
| Endpoints          | HTTP Methods | Purpose      |
|---------------|-----|-----------------|
| <a name="auth-top" href="#">[/auth](#auth)<a />      | POST  | This endpoint serves the purpose of enabling user authentication, allowing users to securely access and interact with our services.|
| <a name="community-top" href="#">[/community](#community)<a />    | GET, POST, PATCH  | Manages community-related operations. Include the following `creating community post`, `editing their post`, `getting engagement (in form of likes and comments)`. |

### <a name="auth">[[1]](#auth-top)<a /> Authentication

**Brief Overview:** <br />
This specific API endpoint has been meticulously crafted to fulfill the essential function of facilitating user authentication. Its primary objective is to empower users by providing a secure mechanism for accessing and actively engaging with our suite of services. By leveraging this endpoint, users can seamlessly authenticate their identities, ensuring a robust and protected interaction with our platform.
- The `POST` method was employed in this endpoint as it required obtaining information from the user, be it user login credentials for sign-in or for sign-up.
```html
<!-- Include this script in your HTML file or directly in the README.md file -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>

<!-- Add the following code snippet in your README.md -->
<div class="code-container" id="code-container-1">
  <button class="btn" data-clipboard-target="#code-snippet-1">Copy</button>
  <pre><code id="code-snippet-1">Your code here</code></pre>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function (e) {
      e.clearSelection();
      e.trigger.textContent = 'Copied!';
      setTimeout(function () {
        e.trigger.textContent = 'Copy';
      }, 1500);
    });
  });
</script>



### <a name="community">[[2]](#community-top)<a /> Community
