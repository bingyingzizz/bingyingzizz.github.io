# σ-环　`def.sigma-ring`
σ-环（σ-Ring）
layer 3 · 定义 · 集合族与 σ-代数 · 实变函数+数学分析
[在星图里打开](../#n=def.sigma-ring)　·　[节点索引](../index.md)

$\mathfrak{A} \subseteq \mathcal{P}(X)$ 是 $X$ 上的一个 **$\sigma$环**，当且仅当把「有限」都换成「可数」之后仍封闭：

- 对**可数并**封闭：$A_1, A_2, \ldots \in \mathfrak{A} \implies \bigcup_{n=1}^{\infty} A_n \in \mathfrak{A}$
- 对**差**封闭：$A, B \in \mathfrak{A} \implies A \setminus B \in \mathfrak{A}$

**$\sigma$环 $=$ 环 + 可数并**。它**不要求**含 $X$ —— 这正是它与 $\sigma$代数的唯一差别。

## 它能推出什么 / 谁在用它
- 被 [`def.sigma-algebra`](../nodes/def.sigma-algebra.md) σ-代数 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.sigma-ring.2.md](./def.sigma-ring.2.md)

refs: Halmos, Measure Theory, §4

> 说明见 `notes/def.sigma-ring.md`

引用：`def.sigma-ring`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
