# API Documentation

Greetings! We're thrilled to have you explore our API documentation. This comprehensive guide is designed to provide detailed insights into every available endpoint, their specific purposes, the corresponding HTTP methods, and the expected payload for seamless integration with our services. Let's dive in and discover how our API can empower your applications!

**Note:** This uses url path `base_url/api/v1`

## Endpoints
| Endpoints          | HTTP Methods | Purpose      |
|---------------|-----|-----------------|
| [/auth](#auth)      | POST  | This endpoint serves the purpose of enabling user authentication, allowing users to securely access and interact with our services.|
| [/community](#community)    | GET, POST, PATCH  | Manages community-related operations. Include the following `creating community post`, `editing their post`, `getting engagement (in form of likes and comments)`. |

### <a name="auth" href="#">[1]<a /> Authentication
