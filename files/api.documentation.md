# API Documentation

Greetings! We're thrilled to have you explore our API documentation. This comprehensive guide is designed to provide detailed insights into every available endpoint, their specific purposes, the corresponding HTTP methods, and the expected payload for seamless integration with our services. Let's dive in and discover how our API can empower your applications!

**Note:** This uses url path `base_url/api/v1` 
<br />

## Endpoints
| Endpoints          | HTTP Methods | Purpose      |
|:---------------|:-----|:-----------------|
| <a name="auth-top" href="#">[/auth](#auth)<a />      | POST  | This endpoint serves the purpose of enabling user authentication, allowing users to securely access and interact with our services.|
| <a name="community-top" href="#">[/community](#community)<a />    | GET, POST, PATCH  | Manages community-related operations. Include the following `creating community post`, `editing their post`, `getting engagement (in form of likes and comments)`. |

<br />

### [<a name="auth">Authentication<a />](#auth-top)

**Brief Overview:** <br />
This specific API endpoint has been meticulously crafted to fulfill the essential function of facilitating user authentication. Its primary objective is to empower users by providing a secure mechanism for accessing and actively engaging with our suite of services. By leveraging this endpoint, users can seamlessly authenticate their identities, ensuring a robust and protected interaction with our platform.

| HTTP Method | Description |
|:--------|:-------------|
|`POST`|The `POST` method was employed in this endpoint as it required obtaining information from the user, be it user login credentials for sign-in or for sign-up.|

**Child routes for /auth endpoint:** <br/>
This is an example payload for `/signup` endpoint used for signing up or registering.

```html
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups",
    "role": "2",
    "name": "University of Batangas"
}
```

This is an example payload for `/signin` endpoint used forsigning in or logging in.
```html
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<br />

### [<a name="community">Community<a />](#community-top)

**Brief Overview:**
<br/>The endpoint is specifically designated for the community and will encompass child routes for actions such as posting, commenting, and liking a post.

| HTTP Method | Description | 
|:--------|:-------------|
|`GET`|The `GET` method was employed in this endpoint for fetching community related information such as post, interaction, and engagement.| 
|`POST`|The `POST` method was employed in this endpoint as it required obtaining information from the user, for posting and/or interacting with the post.| 
|`PATCH`|The `PATCH` method was employed in this endpoint because user will have the ability to modify their actions.|
|`DELETE`|The `DELETE` method was employed in this endpoint because user will have the ability to delete their actions.|

<br /> **Parent Route:** `/post` <br/> 
**Child Routes**


| HTTP Method   |Child Routes                                                       | Description  |
|:------------- |:------------------------------------------------------------------|:------------- |
|`GET`          |/<br/>/:condition<br/>/engage<br/>/comment<br/>/comment/:condition |_For getting all posts._ <br/> _For getting all posts that meets the condition/s._ <br/> _For getting all engagement under the form of upvotes/downvotes._ <br/> _For getting all comments._ <br/> _For getting all comments under a condition._ |
|`POST`         |/<br/>/engage<br/>/comment                                         ||
|`PATCH`        |/:id<br/>/engage/:id<br/>/comment/:id                              ||
|`DELETE`       |/:id<br/>/comment/:id                                              ||



**Child routes for /auth endpoint:** <br/>
This is an example payload for `/signup` endpoint used for signing up or registering.

```html
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups",
    "role": "2",
    "name": "University of Batangas"
}
```

This is an example payload for `/signin` endpoint used forsigning in or logging in.
```html
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```
