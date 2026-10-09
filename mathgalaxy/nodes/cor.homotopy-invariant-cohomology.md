# 层上同调是同伦不变量　`cor.homotopy-invariant-cohomology`
同伦等价的映射给同构的上同调
layer 18 · 推论 · 层上同调 · 同调代数+拓扑学

设 $M$ 是**常值**阿贝尔群。
> 陈述续见 `nodes/cor.homotopy-invariant-cohomology.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.sheaf-cohomology` 层上同调：用到了定义 层上同调　proofs/def-dep.homcohom-sheafcoh.md
- `def.homotopy` 同伦：用到了定义 同伦　proofs/def-dep.homcohom-homotopy.md

refs: Le Stum, Proposition 7.4.2；Le Stum, Corollary 7.4.3

## 说明
⭐ **这就是「层上同调是拓扑不变量」那句话的出处** —— 常值系数下，$H^{n}(-, M)$ 是同伦不变的，所以它可以拿来算空间的同伦类不变量（奇异上同调、de Rham 上同调都落在这一条上）。
