# Fatou 引理　`lem.fatou`
Fatou 引理（Fatou's Lemma）
layer 19 · 引理 · 积分 · 分析学
[在星图里打开](../#n=lem.fatou)　·　[节点索引](../index.md)

设 $\{f_n\} \subseteq L^+$，则

$$\int \liminf_{n\to\infty} f_n \le \liminf_{n\to\infty} \int f_n$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.mct`](../nodes/thm.mct.md) 单调收敛定理：MCT $\implies$ Fatou 引理　[proofs/imp.fatou.md](../proofs/imp.fatou.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.dct`](../nodes/thm.dct.md) 控制收敛定理
- ⇒ [`cor.fatou`](../nodes/cor.fatou.md) Fatou 的推论

refs: Folland, Real Analysis, Theorem 2.18

外部：Wikipedia https://en.wikipedia.org/wiki/Fatou%27s_lemma

> 说明见 `notes/lem.fatou.md`

引用：`lem.fatou`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
