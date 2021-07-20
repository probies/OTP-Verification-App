# Google Calendar API Intgeration Document

# Step 1 : Create new Project in Google Developer console

1. Open the Google Cloud Console.
2. Next to "Google Cloud Platform," click the Down arrow arrow_drop_down . A dialog listing current projects appears.
3. Click New Project. The New Project screen appears.
4. In the Project Name field, enter a descriptive name for your project. If you're executing a quickstart, use "Quickstart."
5. (Optional) To edit the Project ID, click Edit. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
6. Click Organization and select your organization.
7. In the Location field, click Browse to display potential locations for your project.
8. Click a location and click Select.
9. Click Create. The console navigates to the Dashboard page and your project is created within a few minutes.

# Step 2 : Enable a Google Workspace API

1. Open the Google Cloud Console.
2. Next to "Google Cloud Platform," click the Down arrow arrow_drop_down and select a project.
3. In the top-left corner, click Menu menu > APIs & Services.
4. Click Enable APIs and Services. The Welcome to API Library page appears.
5. In the search field, enter the name of the API you want to enable. For example, type "Calendar API" to find the Google Calenadar API . If you are enabling an API for a quickstart, refer to the quickstart's Prerequisites section for the API to enable.
6. Click the API to enable. The API page appears.
7. Click Enable. The Overview page appears.
8. To enable an additional API, repeat steps 3 - 7.

# Step 3 : Create Credentials IDs

### Create OAuth Client ID:

1.  In the left-hand navigation, click Credentials. The "Credentials" page appears.
2.  Click Create Credentials and select OAuth client ID. The "Create OAuth client ID" page appears.
3.  Click the Application type drop-down list and select the type of application you're creating.
4.  In the name field, type a name for the credential. This name is only shown in the Cloud Console.
5.  In this document, continue with the documentation that corresponds to your app type:
    In this document, continue with the documentation that corresponds to your app type:

        I. Create Web application credentials (client-side JavaScript). Use to this section for the JavaScript quickstart:

            1. Specify authorized JavaScript origins. Under Authorized JavaScript origins, click Add URI and type a URI in the URIs field for use with requests from a browser. The origins identify the domains from which your application can send API requests to the OAuth 2.0 server.
            2. Click Create. The OAuth client created screen appears. This screen shows the Client ID and Client secret.
            3. Note the Client ID. Client secrets aren't used for Web applications.
            4. Click OK. The newly created credential appears under "OAuth 2.0 Client IDs."
            5. (Optional). If you're creating credentials as a prerequisite for a JavaScript quickstart, you must also generate an API key. To generate an API key:
                a. Click the Create Credentials drop-down list and select API Key. The "API Key created" page appears.
                b. Note the API key.
                c. Click Close. The newly created credential appears under "API Keys."

        II. Create Web application credentials (web server app):
            1. For web server applications using languages and frameworks like PHP, Java, Python, Ruby, and .NET, specify authorized redirect URIs:
                a. Under Authorized redirect URIs, click Add URI.
                b. Type a URI in the URIs field. The redirect URIs are the endpoints to which the OAuth 2.0 server can send responses.
            2. Click Create. The OAuth client created screen appears. This screen shows the Client ID and Client secret.
            3. Click the download button to the right of the newly-created OAuth 2.0 Client ID. This copies a client secret JSON file to your desktop. Note the location of this file.

### Configure OAuth Consent Screen :

1. Open the Google Cloud Console.
2. Next to Google Cloud Platform, click the Down arrow arrow_drop_down and select a project.
3. At the top-left corner, click Menu menu.
4. Click APIs & Services > Credentials. The credential page for your project appears.
5. Click Configure Consent Screen. The "OAuth consent screen" screen appears.
6. Click the user type for your app. If you're running a Quickstart, select Internal.

```
Note: For company-internal apps, scopes aren't listed on the consent screen and use of restricted or sensitive scopes does not require further review by Google.
Click Create. A second "OAuth consent screen" screen appears.

```

Fill out the form:

7. If you're running a quickstart, enter "Quickstart" in the App name field.
8. If you're running a quickstart, enter your personal email address in the User support email field.
9. If you're running a quickstart, enter your personal email address in the Developer contact information field.
10. Click Save and Continue. The "Scopes" page appears.

11. (optional). If you are creating an external app, click Add or Remove Scopes. The "Update selected scopes" page appears.

12. (optional). For each API you intend to use in your app, check the scopes to use in your app.

13. Click Save and Continue. The "Edit app registration" page appears.

14. lick Save and Continue. The "OAuth consent screen" appears.

15. Click Back to Dashboard.

### Create an API key

To create an API key in a project, the user must be granted the Editor basic role (roles/editor) on the project. See basic roles for more information.

    To create an API key:

    1. Navigate to the APIs & Services→Credentials panel in Cloud Console.

    2. Select Create credentials, then select API key from the dropdown menu.

    3. The API key created dialog box displays your newly created key. An API key is a long string containing upper and lower case letters, numbers, and dashes. For example, a4db08b7-5729-4ba9-8c08-f2df493465a1.

You might want to copy your key and keep it secure. Unless you are using a testing key that you intend to delete later, add application and API key restrictions.


