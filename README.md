 #  Create a file name `jsconfig.json` in project root ( VS code intellicense problem) 

 > ### For React.js
 ```
{
  "include": ["**/*"],
  "exclude": ["node_modules", "**/node_modules", "dist", "build"],
  "compilerOptions": {
    "allowJs": true,
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node"
  }
}

> ### For Next.js
 ```
{
  "include": ["**/*"],
  "exclude": ["node_modules", "**/node_modules", "dist", "build", ".next"],
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    },
    "allowJs": true,
    "target": "es6",
    "module": "esnext",
    "moduleResolution": "node"
  }
}
```

```
