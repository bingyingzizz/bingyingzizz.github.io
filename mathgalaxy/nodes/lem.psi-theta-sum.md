# ψ 与 θ 的分组恒等式　`lem.psi-theta-sum`
$\psi(x)=\sum_{k\ge1}\theta(x^{1/k})$
layer 14 · 引理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=lem.psi-theta-sum)　·　[节点索引](../index.md)

对 $x\ge1$，$\psi(x)=\sum_{k\ge1}\theta\bigl(x^{1/k}\bigr)$。和式有限：$p^{k}\le x$ 迫使 $k\le\log_{2}x$。

## 为什么成立（入边，证明在 proofs/）
- [`def.prime-counting`](../nodes/def.prime-counting.md) 素数计数函数：按素数幂的指数分组　[proofs/imp.pnt-lemma1.md](../proofs/imp.pnt-lemma1.md)

## 它能推出什么 / 谁在用它
- ⇒ [`lem.psi-theta-asymptotic`](../nodes/lem.psi-theta-asymptotic.md) ψ 与 θ 的差是 o(x)

refs: Apostol, Introduction to Analytic Number Theory, Ch. 4

## 说明
这是 $\psi$ 与 $\theta$ 的第一个桥：按 $n=p^{k}$ 的 $k$ 分组即可。证明见入边（按素数幂的指数分组）。

引用：`lem.psi-theta-sum`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
