# 阿贝尔求和（分部求和）　`lem.abel-summation`
Abel 分部求和：有限和恒等式与 Dirichlet 判别法
layer 23 · 引理 · 数项级数的敛散性 · 数学分析
[在星图里打开](../#n=lem.abel-summation)　·　[节点索引](../index.md)

设 $(a_n),(b_n)$ 为数列，$A_n=\sum_{k=1}^{n}a_k$（$A_0=0$）。则对 $n\ge1$，
$$\sum_{k=1}^{n}a_kb_k=A_nb_n-\sum_{k=1}^{n-1}A_k(b_{k+1}-b_k).$$
**推论（Dirichlet 判别法）**：若 $A_n$ 有界、$b_n$ 单调递减且 $b_n\to0$，则 $\sum a_nb_n$ 收敛。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/lem.abel-summation.2.md](./lem.abel-summation.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3；Knopp, Theory and Application of Infinite Series

> 说明见 `notes/lem.abel-summation.md`

引用：`lem.abel-summation`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
