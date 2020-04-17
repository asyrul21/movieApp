# movieApp

This is a small web development project, built as an assessment to Revenue Monster's developer job application. Candidates were given a choice to chose one task out of the given two. I chose to develop a front-end, mobile-optimised web application using React and vanilla CSS (no bootstrap). The app pulls data from the <a href="https://developers.themoviedb.org/3/getting-started/introduction">Movie Database Api</a>, which are then rendered on this page using minimalistic design approach. Users are able to click on any movie thumbnail to get more information about a movie. Additionally, users are able to search for a movie title using the provided search bar. At the point of development, the total number of data pages available were 500. For the sake of time constraint however, the Pagination component only supports up to 5 accessible pages. This component can be extended to support more pages later on.

## Some references
Fetching API data from React example

https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

Pagination example

https://medium.com/@agoiabeladeyemi/pagination-in-reactjs-36f4a6a6eb43

Search field example

https://stackoverflow.com/questions/51726391/how-to-create-a-search-field-in-reactjs

# Deploy

There were some issues when deploying to Heroku. To fix that, install serve

```bash
    npm install --save serve
```

Then, in package.json, change the start script to

```json
  "scripts": {
    "start": "serve -s build",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

However, locally, serve gives 404. For development, change back the start script to

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

The error occured on heroku logs were :

```bash
2020-04-16T18:23:54.430732+00:00 app[web.1]: > movie-app@0.1.0 start /app
2020-04-16T18:23:54.430733+00:00 app[web.1]: > react-scripts start
2020-04-16T18:23:54.430733+00:00 app[web.1]: 
2020-04-16T18:23:56.450398+00:00 app[web.1]: ℹ ｢wds｣: Project is running at http://172.18.166.114/
2020-04-16T18:23:56.450937+00:00 app[web.1]: ℹ ｢wds｣: webpack output is served from
2020-04-16T18:23:56.451053+00:00 app[web.1]: ℹ ｢wds｣: Content not from webpack is served from /app/public
2020-04-16T18:23:56.451171+00:00 app[web.1]: ℹ ｢wds｣: 404s will fallback to /
2020-04-16T18:23:56.451417+00:00 app[web.1]: Starting the development server...
2020-04-16T18:23:56.451418+00:00 app[web.1]: 
2020-04-16T18:23:56.558528+00:00 heroku[web.1]: State changed from starting to crashed
2020-04-16T18:29:35.053274+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=radiant-castle-14362.herokuapp.com request_id=727a5c89-991a-4834-85d5-e053515231e2 fwd="130.88.240.76" dyno= connect= service= status=503 bytes= protocol=https
```

Some keywords to help other developers: webpack output is served from Content not from webpack is served from /app/public 404s will fallback to /

Reference: https://stackoverflow.com/questions/60846916/react-app-runs-locally-but-crashes-with-error-code-h10-on-heroku