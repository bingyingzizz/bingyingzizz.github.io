# 完备性 ⟺ 不破坏可测性　`prop.complete-measurable`
命题：$\mu$ 完备 $\iff$ 几乎处处相等 / 几乎处处收敛不破坏可测性
layer 16 · 命题 · 可测函数与收敛 · 分析学

设 $(X, \mathcal{M}, \mu )$ 是测度空间。则 $\mu$ **完备**当且仅当下面两条都成立：

**(a)** $f$ 可测且 $f = g$ $\mu -\text{a.e.} \implies$ $g$ 可测；

**(b)** 每个 $f_n$ 可测且 $f_n \to f$ $\mu -\text{a.e.} \implies$ $f$ 可测。

## 为什么成立（入边，证明在 proofs/）
- `def.null-set` 零集与完备：用到了定义 零集与完备　proofs/def-link.nullset-complete-measurable.md
- `def.ae` 几乎处处：用到了定义 几乎处处　proofs/def-link.ae-complete-measurable.md

refs: Folland, Real Analysis, Prop. 2.11

> 说明见 `notes/prop.complete-measurable.md`
