---
navigation:
  title: "変数"
  icon: "minecraft:paper"
  parent: pneumaticcraft:programming.md
---

# 変数

*変数*を使用するとドローンプログラムでブロックの位置(座標とも呼ばれます)を保存および操作して高度なドローン機能を提供できます。

ドローンプログラム内から変数を作成または操作するには[座標演算](./coordinate_operator.md)ウィジェットと[条件](./coordinate.md)ウィジェットを使用して変数に対してテストを実行するには[条件: 座標](./condition_coordinate.md)ウィジェットを使用します。

[エリア](./area.md)ウィジェットではGPS座標の代わりに*変数*名を使用できます。

これらの*変数*はワールドの再ロード後も保持されるため、たとえばドローンの掘削位置が*変数*によって追跡される無限の採掘プログラムを作成するために使用できます。

(古いですがまだ関連性のある)チュートリアルについては[MineMaarten](https://www.youtube.com/watch?v=FIjEdD_Yj9Y)によるYouTube動画を参照してください。

(thing)変数は座標(X/Y/Zの3つ)のみを格納しますが、よく考えてみると*整数*や*ブーリアン*も使用できることがわかります。整数には1つの軸のみを使用し、ブール値には'0'=false、その他はすべてtrueなどを定義します。楽しんでください！

## アイテム変数

前のページで変数には座標しか保存できないと述べました。まあ、それはちょっとした嘘でした。*アイテム変数*というものもあり、これは(ご想像のとおり)アイテムの値を保存します。これらは[アイテム割当](./item_assign.md)ウィジェットと[アイテムループ](./for_each_item.md)ウィジェットで作成されて[アイテムフィルター](./item_filter.md)ウィジェットによって使用されます。

## 変数のタイプ

変数には3つのタイプがあります:
- *ローカル変数*: これらはドローンごとに保存され、単に「varname」として参照されます。
- *グローバル変数*: これらはすべてのドローンに対して共通であり、データの共有に使用できます。これらは「#varname」または「%varname」として参照(次のページを参照)されます。
- *スペシャル変数*はドローンに関するメタデータを取得するために使用でき、「$varname」として参照されます。

<a name="global"></a>
## グローバル変数

通常の変数は[ドローン](../tools/drone.md)ごとに固有であり、共有できません。ただし、*グローバル変数*は*共有できます*。これにより、ドローンは互いに通信できます。

さらに[GPSツール](../tools/gps_tool.md)はそれらにリンクして変更することができ、[ユニバーサルセンサー](../machines/universal_sensor.md)はそれらに基づいて<Color hex="#f00">レッドストーン信号</Color>を発信することができ、[リモート](../tools/remote.md)はそれらを表示して変更できます。

## グローバル変数(続き)

<Color hex="#880">$(t:プレイヤーグローバル変数はPNC:R 3.0.0、MC 1.18.1で追加)グローバル変数には2つの種類があります$(/t:プレイヤーグローバル変数はPNC:R 3.0.0、MC 1.18.1で追加)</Color>: *プレイヤーグローバル*と*サーバーグローバル*です。
- プレイヤーグローバル変数には「#」という接頭辞が付きます。これらはプレイヤーのドローン間で共有されますが各プレイヤーには非公開です。
- サーバーグローバル変数には「%」という接頭辞が付きます。これらの変数はサーバー上の*全*プレイヤー間で共有されます。

注: 以前のバージョンのMODではプレフィックスが「#」のサーバーグローバルのみが存在していました。

## 変数コマンド

グローバル変数を操作するためのコマンドがいくつかあります(どのプレイヤーでも使用可能):
- /pncr global_var set <varname> <x> <y> <z>
- /pncr global_var set <varname> <item-registry-id>
- /pncr global_var get <varname>
- /pncr global_var list
- /pncr global_var delete <varname>

<a name="special"></a>
## スペシャル変数

以下のスペシャル変数が認識されます:
- *$owner_pos*: [ドローン](../tools/drone.md)を所有するプレイヤーの(頭の)ブロック位置、または所有者がオフラインの場合は(0,0,0)。
- *$drone_pos*: ドローン自体のブロック位置。
- *$player_pos=<name>*: プレイヤー'<name>'(大文字と小文字は区別されません)の(頭の)ブロック位置、または無効なプレイヤー名またはオフラインのプレイヤー名の場合は(0,0,0)。

<a name="special"></a>
## スペシャル変数(続き)


- *$owner_look*: 各軸上の所有プレイヤーの向きを表すベクトル。各値は-1、0、または1になります。
- *$controller_pos*: 制御する[プログラマブルコントローラー](./programmable_controller.md)ブロックのブロック位置、またはドローンがプログラマブルコントローラーではなく実際のドローンである場合は(0,0,0)。

<a name="special"></a>
## スペシャル変数(続き)

互換性の理由から使用可能な古い変数もいくつか存在します(ただし、前のページの変数を使用することをお勧めします):
- *$owner*: *$owner_pos*のエイリアス。
- *$drone*: 歴史的な理由により、ドローンのブロック位置の*上*を取得します。
- *$player=<name>*: *$player_pos*のエイリアス。

## デバッグ

デバッグの目的で変数の値を表示すると便利な場合があります。変数の値を表示するにはいくつかの方法があります:
- [リネーム](./rename.md)ウィジェットを使用して変数をドローンのネームプレートとして表示する
- [看板編集](./edit_sign.md)ウィジェットを使用してテキストを書き込む
- [リモート](../tools/remote.md)で[ラベル](../tools/remote.md#label)を使用する。

## デバッグ(続き)

上記のいずれかの方法で表示されるテキストに変数を挿入するには構文*${varname}*を使用します。

 ここでも特別なグローバル変数プレフィックスが適用されることに注意してください。したがってドローンの位置を補間するには*${$drone_pos}*を使用して、グローバル変数を補間するには*${#globalvarname}*または*${%globalvarname}*を使用します。

## デバッグ(続き)

変数名の末尾にそれぞれ*.x*、*.y*、または *.z*を付けることで座標のX、Y、またはZコンポーネントのみを表示することもできます。たとえばドローン所有者のY座標を表示するには、*${$owner_pos.y}*を使用します。

変数が*アイテム変数*の場合、*.id*サフィックスはアイテムの表示名(デフォルト)ではなく、アイテムのレジストリIDを取得します。これは[格言タイル](../machines/aphorism_tile.md#items)にアイテムを表示する場合に特に便利です。

