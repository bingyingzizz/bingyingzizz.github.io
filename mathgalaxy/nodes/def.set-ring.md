# 环与代数　`def.set-ring`
环与代数（Ring, Algebra）
layer 2 · 定义 · 集合族与 σ-代数 · 分析学

设 $\mathfrak{A} \subseteq \mathcal{P}(X)$ 是 $X$ 的一族子集。

$\mathfrak{A}$ 是**环**（ring），当且仅当它对有限并封闭、且对差封闭：

$$A, B \in \mathfrak{A} \implies A \cup B \in \mathfrak{A}, \quad A \setminus B \in \mathfrak{A}$$

$\mathfrak{A}$ 是**代数**（algebra），当且仅当 $\mathfrak{A}$ 是环、且含全集：
> 陈述续见 `nodes/def.set-ring.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-set-ring.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.ring-monotone-sigma` 环 → σ-环 的判据
- 被 `prop.set-class-properties` 集合族的基本性质 用
- 被 `thm.ring-monotone-sigma` 环 → σ-环 的判据 用
- 被 `def.sigma-ring` σ-环 用
- 被 `def.premeasure` 预测度 用

refs: Halmos, Measure Theory, §4；Folland, Real Analysis, §1.2

> 说明见 `notes/def.set-ring.md`
