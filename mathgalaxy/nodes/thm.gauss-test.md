# 高斯判别法（Gauss）　`thm.gauss-test`
Gauss 判别法：比值展开到 $1/n$ 项
layer 22 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.gauss-test)　·　[节点索引](../index.md)

设 $a_n>0$，且存在 $\mu\in\mathbb{R}$ 与 $\delta>0$，使
$$\frac{a_n}{a_{n+1}}=1+\frac{\mu}{n}+O\Bigl(\frac{1}{n^{1+\delta}}\Bigr)\qquad(n\to\infty).$$
则 $\mu>1$ 时 $\sum a_n$ 收敛；$\mu\le1$ 时 $\sum a_n$ 发散。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.gauss-test.2.md](./thm.gauss-test.2.md)

refs: Knopp, Theory and Application of Infinite Series；Bromwich, An Introduction to the Theory of Infinite Series

> 说明见 `notes/thm.gauss-test.md`

引用：`thm.gauss-test`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
