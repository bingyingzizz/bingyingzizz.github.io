# 唯一分解整环　`def.ufd`　·　说明
根 `../`

$\mathbb{Z}$ 与 $K[x]$ 都是 UFD（后者见 `thm.poly-ufd`），而 $\mathbb{Z}[\sqrt{-5}]$ 不是：



$$6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5}),$$



四个因子都不可约，且互不相伴 —— 所以分解不唯一。



UFD 的三个判别性质：①「不可约 = 素」（`def.irreducible-element`）；② 任意两元素有 $\gcd$（`def.gcd-domain`）；③ 没有「无限下降的因子链」。三者都等价于唯一分解。



层级（`imp.ring-euclid-pid` / `imp.ring-pid-ufd`）：Euclid 整环 $\implies$ PID $\implies$ UFD $\implies$ gcd 整环，两个箭头都不可逆（$\mathbb{Z}[\sqrt{-5}]$ 连 gcd 都没有；存在 UFD 不是 PID，如 $K[x, y]$）。
