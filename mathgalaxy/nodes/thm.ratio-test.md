# 比值判别法（d'Alembert）　`thm.ratio-test`
比值判别法：$\lim a_{n+1}/a_n$ 与收敛性
layer 21 · 定理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=thm.ratio-test)　·　[节点索引](../index.md)

设 $a_n>0$，$q=\lim_{n\to\infty}\frac{a_{n+1}}{a_n}$（极限可以为 $+\infty$）。则
1. $q<1$ 时 $\sum a_n$ 收敛；
2. $q>1$ 时 $\sum a_n$ 发散；
3. $q=1$ 时判别法失效（收敛、发散都可能）。

## 为什么成立（入边，证明在 proofs/）
- [`thm.kummer`](../nodes/thm.kummer.md) Kummer 判别法：比值判别法：Kummer 取 $c_n=1$　[proofs/imp.kummer-ratio.md](../proofs/imp.kummer-ratio.md)

- …另有入边，续页见 [nodes/thm.ratio-test.2.md](./thm.ratio-test.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3；Knopp, Theory and Application of Infinite Series

> 说明见 `notes/thm.ratio-test.md`

引用：`thm.ratio-test`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
