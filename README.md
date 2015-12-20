web-template
====
gulp(ejs, sass, cssnext, css-minify, js-uglify, image-min, browser-sync)

タスクランナーのgulpを使用し、Web制作のテンプレートを作成します。


## Description
### このテンプレートでできること
+ HTML
    - ejsを使用
+ CSS
    - Sassもしくは、CSS
    - minify設定可
+ JavaScript
    - minify設定可
+ 画像ファイル
    - 圧縮してコピー

## Requirement
+ [Node.js](https://nodejs.org/en/)
    - [hokaccha/nodebrew](https://github.com/hokaccha/nodebrew) とかで入れるのがおすすめ

## Install

```
$ git clone https://github.com/Nagatani/web-template.git [clone先のディレクトリ]
$ cd [clone先のディレクトリ]
$ npm install
$ gulp
# [control] + [c]で停止
```

## Usage

gulpの各設定は、`gulp-config.js`や、`gulpfile.js`で確認、変更ができます。

### ソースファイル
`src/`以下に配置します。

### ファイルの変更を確認しながら修正

```
$ gulp
```

### リリースコンパイル

```
$ gulp build
```

ビルド後のリリース用Webサイト一式は、`build/`以下に格納されます。

### 作成方法
#### HTML
HTMLの作成には、[EJS](http://www.embeddedjs.com/)を使用します。

ヘッダ、フッタ等の修正を全部のHTMLに当て込むのは、かなり労力が割かれます。また、適用漏れも発生してしまいます。
これをどうにかしたいので、HTMLの各部品をテンプレート化してビルドさせます。

`src/index.ejs`の各パラメータは、`src/ejs/_html_head.ejs`のテンプレート変数として使用しています。
HTMLの各部品は`src/ejs/_部品名.ejs`というようなファイル名で作成します。

部品を使用したい箇所で`<% include ejs/_部品名 %>`とすることで使用できます。

ejsファイルは、ビルド後`build/`直下へコピーされます。

#### CSS
[Sass](http://sass-lang.com/) もしくは pure CSS を使用できます。

scssファイルや、cssファイルは、`src/style/`ディレクトリ以下に入れます。  
Sassビルド後、[cssnext](http://cssnext.io/)で自動的にベンダープレフィックスを付与するなどが行われ、minifyされ`build/css/`へコピーされます。

#### JavaScript
JavaScriptは、uglifyで圧縮され`build/js/`へコピーされるのみです。

#### 画像ファイル
`image/`以下に配置された画像ファイルは、ロスレス圧縮され`build/image/`へコピーされます。

## Licence
[WTFPL](http://www.wtfpl.net/)
