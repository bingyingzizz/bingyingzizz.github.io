# 闭图像定理　`thm.closed-graph`
闭图像定理：图像闭的线性映射连续
layer 20 · 定理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=thm.closed-graph)　·　[节点索引](../index.md)

设 $E, F$ 是 Banach 空间，$u : E \to F$ 线性。若 $u$ 的图像
$$G(u) := \{(x, u(x)) : x \in E\}$$
在乘积空间 $E \times F$ 中**闭**，则 $u$ 有界（从而连续）。
把乘积拓扑的收敛展开，判据就是一句话：对任意序列 $x_n \to x$，若 $u(x_n) \to y$，则必有 $y = u(x)$。

## 为什么成立（入边，证明在 proofs/）
- [`thm.bounded-inverse`](../nodes/thm.bounded-inverse.md) 逆算子定理：逆算子定理 $\implies$ 闭图像定理　[proofs/imp.fa-closed-graph.md](../proofs/imp.fa-closed-graph.md)

- …另有入边，续页见 [nodes/thm.closed-graph.2.md](./thm.closed-graph.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.closed-graph.3.md](./thm.closed-graph.3.md)

refs: Rudin, Functional Analysis, 2.15

> 说明见 `notes/thm.closed-graph.md`

引用：`thm.closed-graph`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
