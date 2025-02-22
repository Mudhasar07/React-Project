# My React Project

# Parcel
- It give Dev Build
- It create local server for us under localhost:1234
- HMR -> Hot Module replacement --> If any changes done on code, its reflect immediately after saving the file, is called HMR.
- Parcel Doing HMR -> Using -> File Watching Algorithm -> This FWA was written in C++ Program
- Parcel giving Caching -> It gives FASTER BUILD -> It reduce the build time, its read from caching -> parcel-cache
- Image optimization
- Minification
- Bundling
- Compress
- Differential bundling -> Support the old browser to open our app
- Consistent Hashing
- Tree Shaking Algorithm --> It remove unused code
- It have Different Build for DEVELOPMENT and PRODUCTION
- Code splitting
- Diagnostic
- Error handling
- HTTP to HTTPS => It will convert and support
- It have different build for Development & production -> npx parcel build index.html

# Point to Remember
- appendChild -> root.appendChild(anyAttribute) -> will append the value inside the root and make it visible
- React.createElement(3 arg have to pass), ReactDOM.createRoot(document.getElementById("id"));
- Inside heading Object -> Props will be there, -> Props contain -> children of the element(h1 message) and attribute(id, classname, etc)