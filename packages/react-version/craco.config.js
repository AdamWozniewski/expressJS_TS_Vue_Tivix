const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');

const packages = [];
//for loaders, if there is another dependency package we need to manually add it here (for CRA only)
packages.push(path.join(__dirname, './../shared-anywhere'));

const resolvePackage = relativePath => path.resolve(__dirname, relativePath);

//craco let's us change the CRA configurations without ejecting the application
module.exports = {
  webpack: {
    configure: (webpackConfig, _) => {
      //allows to local import from outside of src folder (check alias part)
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin',
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

      //add loader for tsx files imported from "shared" component
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName('babel-loader'),
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      return webpackConfig;
    },
    //shared component and web has it's own react, which then happens to bug the application. This allows to resolve
    // any react import directly to node_modules/react, so there will be only one react instance
    //TODO can be fixed after switching to lerna hoisting, but needs further changes in electron forge, since when in hoisted mode it does not start
    alias: {
      react: resolvePackage('./node_modules/react'),
      // "@mui/material": resolvePackage('./node_modules/@mui/material')
    },
  },
};
