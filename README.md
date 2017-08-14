# html-swig-loader
A webpack loader can resolve html file use swig engine to html file, there is no need to change filename to swig or others, just html

## Usage
1.`npm i html-swig-loader -D`

2.insert <!--swig--> in your html file which use swig

3.add 'html-swig-loader' to your html rules
```
rules: [
            {
                test: /\.html$/,
                use: ['html-loader', 'html-swig-loader']
            }
        ]
```


