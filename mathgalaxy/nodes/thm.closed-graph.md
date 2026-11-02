# 闭图像定理　`thm.closed-graph`
闭图像定理
layer 26 · 定理 · Baire 纲与三大定理 · 泛函分析
[在星图里打开](../#n=thm.closed-graph)　·　[节点索引](../index.md)

设 $E, F$ 都是 Banach 空间，$u : E \to F$ 线性。按「映射」那条的约定，**映射就是它的图像**：

$$G(u) = \{(x, u(x)) : x \in E\} \subseteq E \times F .$$

把 $G(u)$ 当作乘积空间 $E \times F$ 的子集。若它在**乘积拓扑**下闭，则 $u$ 有界（亦即连续）。

实际用起来就是这一条判据：

$$x_n \to x \ \text{且} \ u(x_n) \to y \quad \Longrightarrow \quad y = u(x) .$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.closed-graph.2.md](./thm.closed-graph.2.md)

refs: Rudin, Functional Analysis, 2.15

> 说明见 `notes/thm.closed-graph.md`

引用：`thm.closed-graph`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
