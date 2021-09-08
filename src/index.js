//デフォルト値
const sayHello = function (name) {
  console.log(`こんにちは！${name}さん`);
};
sayHello("なおちょ");

//上記でsayHelloの中に何も入れないと(”なおちょ”など),
//コンソールに「こんにちは！undifinedさん」と表示されてしまう。
//これはイケてないしバグの温床になる

// 以下のようにデフォルトの値(例：ゲスト)を設定しておくことで
// 引数に何も入らなかった場合でもいい感じになる
const sayHello2 = function (name = "ゲスト") {
  console.log(`こんにちは！${name}さん`);
};
sayHello2();
