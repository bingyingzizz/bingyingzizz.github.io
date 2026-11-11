# θ~x 与 π~x/log x 等价　`lem.theta-pi-equivalence`
$\theta(x)\sim x\iff\pi(x)\sim x/\log x$
layer 15 · 引理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=lem.theta-pi-equivalence)　·　[节点索引](../index.md)

$\theta(x)\sim x$ 当且仅当 $\pi(x)\sim x/\log x$（$x\to\infty$）。

## 为什么成立（入边，证明在 proofs/）
- [`lem.abel-theta-pi`](../nodes/lem.abel-theta-pi.md) θ 与 π 的 Abel 变换：把 $x$ 换成 $x/\log x$：两个方向　[proofs/imp.pnt-lemma4.md](../proofs/imp.pnt-lemma4.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/lem.theta-pi-equivalence.2.md](./lem.theta-pi-equivalence.2.md)

refs: Apostol, Introduction to Analytic Number Theory, Ch. 4

## 说明
用 Abel 变换与 $\int_{2}^{x}\mathrm{d}t/\log^{2}t=o(x/\log x)$（Abel 变换与积分估计）。

引用：`lem.theta-pi-equivalence`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
