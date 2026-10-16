# 根值判别法　`thm.root-test`
定理：根值判别法（Cauchy，用 $\limsup \sqrt[n]{a_n}$）
layer 16 · 定理 · 数项级数的敛散性 · 分析学
[在星图里打开](../#n=thm.root-test)　·　[节点索引](../index.md)

设 $a_n \ge 0$，记

$$\alpha := \limsup_{n \to \infty} \sqrt[n]{a_n}$$

则：$\alpha < 1$ 时 $\sum a_n$ 收敛；$\alpha > 1$ 时 $\sum a_n$ 发散；$\alpha = 1$ 时**无结论**。

## 为什么成立（入边，证明在 proofs/）
- [`thm.comparison-test`](../nodes/thm.comparison-test.md) 比较判别法：与几何级数比较 $\implies$ 根值判别法　[proofs/imp.root-test.md](../proofs/imp.root-test.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.convergence-radius`](../nodes/thm.convergence-radius.md) 收敛半径

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.root-test.md`

引用：`thm.root-test`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
