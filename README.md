##考え方
・配列から要素を取り除くにはfilter()が使えそう
→filter()の条件をどのように設定したらよいだろう?
→removeElementFromArrayの引数の配列に続く値（2,3）を取得できたら条件に設定できそうだ、、、

→配列と続く値の扱いに手こずる。なにかないかと調べる。

→"複数の文字列を連結する関数を定義する"Array.prototype.slice.call(arguments)を探し当てる。
入力してみると[[1, 2, 3, 1, 2, 3], 2, 3]が返ってくる！

→splice(0,1)で最初の配列を除いて変数にいれる。
　　配列に続く値（2,3）の取得ができた。

→filter()の条件の設定方法を考える。
→indexOf()で−1となる値(2,3に対して誤）を返るようにする。



