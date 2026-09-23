# σ-环　`def.sigma-ring`
σ-环（σ-Ring）
layer 3 · 定义 · 集合族与 σ-代数 · 分析学

$\mathfrak{A} \subseteq \mathcal{P}(X)$ 是 $X$ 上的一个 **$\sigma$环**，当且仅当把「有限」都换成「可数」之后仍封闭：

- 对**可数并**封闭：$A_1, A_2, \ldots \in \mathfrak{A} \implies \bigcup_{n=1}^{\infty} A_n \in \mathfrak{A}$
- 对**差**封闭：$A, B \in \mathfrak{A} \implies A \setminus B \in \mathfrak{A}$
> 陈述续见 `nodes/def.sigma-ring.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.set-ring` 环与代数：用到了定义 环与代数　proofs/def-link.sigmaring-ring.md

## 它能推出什么 / 谁在用它
- 被 `def.sigma-algebra` σ-代数 用

refs: Halmos, Measure Theory, §4

> 说明见 `notes/def.sigma-ring.md`
