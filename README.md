# JumptoPopularArtwork  
## Description
pixivで, 非プレミアム会員ではアクセスの制限される「人気作品」検索機能に対して, アプローチできるようにする拡張機能です.  
  
Pixivの検索機能には「新しい順」「古い順」の他, 「人気順」で結果一覧を見ることのできる機能が存在します.  
これを完全に利用するにはプレミアム会員への登録が必要ですが, 非プレミアム会員向けにプロモーションとして, 通常の検索結果画面に"人気の作品"としてピックアップされた4作品が表示される仕様があります.  
この仕様を活用して, 人気作品へのアクセス性を向上させる拡張機能を制作しました.

また, 特定のURL下では前述の"人気の作品"サムネイルが6つ表示されることを確認しています. 普段通りの利用ではアクセス方法が限られていますが, 本拡張機能ではそうした仕様も活用しています.

  
## Image  
![original_before](https://user-images.githubusercontent.com/73869271/98968266-ca811280-2550-11eb-9665-bd21d0cc758f.png)
↑拡張機能を導入する前の状態. "人気の作品"として数件のサムネイルが表示されていますが, 「詳しく見たい！」と思ってサムネイルをクリックしてもプレミアム無料体験のページに遷移してしまい, 作品ページにアクセスすることができません.  
    
  
![original_after](https://user-images.githubusercontent.com/73869271/98968268-cbb23f80-2550-11eb-97ff-e128f4a47aa8.png)
↑拡張機能を導入した状態. 以下の機能が実装されています.   
  
(他者の著作物が映っているため,モザイク加工を施しています.)  
  
## Features  
非プレミアム会員でも"人気の作品"にアプローチしやすくすることを目的として, 以下の機能を実装しています.  
  
・タグ検索結果画面で表示される"人気の作品"作品のサムネイルをクリックしても, プレミアム無料体験のページに遷移することなく直接その作品の詳細ページに移動できます.  
・タグ(キーワード)の検索画面でリロードすると, 「6作品分の"人気の作品"サムネイルを含んだ検索結果(URL)」に遷移できます.(上記画像参照)  
・作品詳細画面でリロードすると, タグをクリックしたときに遷移する先が↑と同じ「6作品分の人気の作品サムネイルを含んだ検索結果(URL)」になります.   
   
