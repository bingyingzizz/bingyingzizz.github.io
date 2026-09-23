# 完备化定理　`thm.completion`
定理：任何测度空间都能完备化
layer 15 · 定理 · 测度的构造 · 分析学

设 $(X, \mathcal{M}, \mu )$ 是测度空间。令

$$\mathcal{N} = \{ N \in \mathcal{M} : \mu(N) = 0 \}$$

$$\bar{\mathcal{M}} = \{ E \cup F : E \in \mathcal{M},\ F \subseteq N,\ N \in \mathcal{N} \}$$

则
> 陈述续见 `nodes/thm.completion.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.null-set` 零集与完备：零集 $\implies$ 完备化　proofs/imp.completion.md
- `def.measure` 测度：用到了定义 测度　proofs/def-link.measure-completion.md
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.null-completion.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.completion-measurable-function` 完备化后可改在零集上
- ⇒ `thm.fubini-complete` 完备情形的 F–T

refs: Halmos, Measure Theory, §13；Folland, Real Analysis, Prop. 1.6

> 说明见 `notes/thm.completion.md`
