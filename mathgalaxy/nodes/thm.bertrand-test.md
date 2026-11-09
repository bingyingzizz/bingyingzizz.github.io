# 贝特朗判别法（Bertrand）　`thm.bertrand-test`
Bertrand 判别法：比值展开到 $1/(n\log n)$ 项
layer 21 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.bertrand-test)　·　[节点索引](../index.md)

设 $a_n>0$，且存在 $\beta\in\mathbb{R}$，使
$$\frac{a_n}{a_{n+1}}=1+\frac1n+\frac{\beta}{n\log n}+o\Bigl(\frac{1}{n\log n}\Bigr)\qquad(n\to\infty).$$
则 $\beta>1$ 时 $\sum a_n$ 收敛；$\beta<1$ 时 $\sum a_n$ 发散；$\beta=1$ 时判别法失效。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.bertrand-test.2.md](./thm.bertrand-test.2.md)

refs: Knopp, Theory and Application of Infinite Series；Bromwich, An Introduction to the Theory of Infinite Series

> 说明见 `notes/thm.bertrand-test.md`

引用：`thm.bertrand-test`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
