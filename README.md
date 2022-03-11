# Redux data flow
> Component => Actions => Reducer => Store

## Components Structure
* __index.js__
    * __/store.js__
        * __/reducers/index.js__
            * __/actions/index.js__
    * __/components/repository-list.js__
        * __/components/repository.js__
            * __/components/star-rater.js__
            * __/actions/index.js__
        * __/actions/index.js__

### How to install it:
* `npm install`
* `node server.js` starts a server
* `npm run dev` initiates the build and serves the app
