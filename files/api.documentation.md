# API Documentation

Greetings! We're thrilled to have you explore our API documentation. This comprehensive guide is designed to provide detailed insights into every available endpoint, their specific purposes, the corresponding HTTP methods, and the expected payload for seamless integration with our services. Let's dive in and discover how our API can empower your applications!

> <sub>**Note:** This uses url path `base_url/api/v1`</sub>  
<br />

## Endpoints
| Endpoints          | HTTP Methods | Purpose      |
|:---------------|:-----|:-----------------|
| <a name="auth-top" href="#">[/auth](#auth)<a />      | POST  | This endpoint serves the purpose of enabling user authentication, allowing users to securely access and interact with our services.|
| <a name="community-top" href="#">[/community](#community)<a />    | GET, POST, PATCH  | Manages community-related operations. Include the following `creating community post`, `editing their post`, `getting engagement (in form of likes and comments)`. |

<br />

### <a name="auth">[Authentication](#auth-top)<a />

**Brief Overview:** <br />
This specific API endpoint has been meticulously crafted to fulfill the essential function of facilitating user authentication. Its primary objective is to empower users by providing a secure mechanism for accessing and actively engaging with our suite of services. By leveraging this endpoint, users can seamlessly authenticate their identities, ensuring a robust and protected interaction with our platform.

| HTTP Method | Description |
|:--------|:-------------|
|`POST`|The `POST` method was employed in this endpoint as it required obtaining information from the user, be it user login credentials for sign-in or for sign-up.|

**Child routes for /auth endpoint:** <br/>

<details>
<summary>This is an example payload for `/signup` endpoint used for signing up or registering.</summary>
    
```javascript
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups",
    "role": "2",
    "name": "University of Batangas"
}
```
</details>

<details>
<summary>This is an example payload for `/signin` endpoint used forsigning in or logging in.</summary>
    
```javascript
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```
</details>



<br />

### <a name="community">[Community](#community-top)<a />

**Brief Overview:**
<br/>The endpoint is specifically designated for the community and will encompass child routes for actions such as posting, commenting, and liking a post.

| HTTP Method | Description | 
|:--------|:-------------|
|`GET`|The `GET` method was employed in this endpoint for fetching community related information such as post, interaction, and engagement.| 
|`POST`|The `POST` method was employed in this endpoint as it required obtaining information from the user, for posting and/or interacting with the post.| 
|`PATCH`|The `PATCH` method was employed in this endpoint because user will have the ability to modify their actions.|
|`DELETE`|The `DELETE` method was employed in this endpoint because user will have the ability to delete their actions.|

<br /> **Parent Route:** `/post` <br/> 

**Child routes for /auth endpoint:** <br/>
This is an example payload for `/signup` endpoint used for signing up or registering.



<details>
<summary>These are example payloads for `/post` child route used for posts-related actions.</summary>

<sub>**Endpoint:** {{base_url}}/post</sub>
```javascript
// GET Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/post/:condition</sub>
```javascript
// GET Method with Condition
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/post</sub>
```javascript
// POST Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/post/:id</sub>
```javascript
// PATCH Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/post/:id</sub>
```javascript
// DELETE Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

</details>

<details>
<summary>This is an example payload for `/engage` endpoint used forsigning in or logging in.</summary>
    
<sub>**Endpoint:** {{base_url}}/engage</sub>
```javascript
// GET Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/engage</sub>
```javascript
// POST Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/engage/:id</sub>
```javascript
// PATCH Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

</details>


<details>
<summary>This is an example payload for `/comment` endpoint used forsigning in or logging in.</summary>
    
<sub>**Endpoint:** {{base_url}}/comment</sub>
```javascript
// GET Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/post/:condition</sub>
```javascript
// GET Method with Condition
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/comment</sub>
```javascript
// POST Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/comment/:id</sub>
```javascript
// PATCH Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

<sub>**Endpoint:** {{base_url}}/comment/:id</sub>
```javascript
// DELETE Method
{
    "email": "malaluanofficial16@gmail.com",
    "pass": "startups"
}
```

</details>
