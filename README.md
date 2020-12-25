# node-gas

gasでnode.jsのパッケージシステムを活用可能な環境です。  

# セットアップ

### claspとrollupのインストール

```
npm i -g @google/clasp rollup
```

### nodeの環境構築
```
git clone git@github.com:inadati/node-gas.git sample
cd sample
npm i
```

### GAS環境の初期設定

```
clasp create --rootDir ./dist
```

ログインがまだの場合は
```
clasp login
```

# デプロイ

下記コマンドでGASへデプロイできます。  

```
npm run deploy
```

# 実装

### GASへのエクスポート

main.jsで下記のようにして関数をGASへexportします。  
ただし、注意が必要なのが下記のコードにはなんの意味もありません。  
通常、rollupは使用されていない関数は無視してしまい出力しません。  
なのでこのような記述をする事で`dist/main.js`に関数が書き出されるようにしています。  
意味のあるコードではありませんので`npm run deploy`の処理の中で`codefix.sh`によって削除されます。

```
$gas = main()
$gas = example1()
```

# 動作環境要件

1. node.jsがインストールされている必要があります。
2. clasp、rollupがインストールされている必要があります。
3. codefix.shは現在のmacOSの標準であるzshを想定しています。変更が必要な場合は、  
codefix.sh及びpackage.jsonの`npm run deploy`の箇所をご自身の環境に合わせて調整してください。