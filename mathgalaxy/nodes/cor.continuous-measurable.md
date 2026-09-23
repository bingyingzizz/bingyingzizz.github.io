# 连续 ⟹ Borel 可测　`cor.continuous-measurable`
推论：连续函数是 Borel 可测的
layer 14 · 推论 · 可测函数与收敛 · 分析学+拓扑学

设 X, Y 是拓扑空间，各配 $Borel \sigma$代数 $\mathfrak{B}_X, \mathfrak{B}_Y$。则
> 陈述续见 `nodes/cor.continuous-measurable.2.md`


## 为什么成立（入边，证明在 proofs/）
- `prop.measurable-criterion` 可测性的两条判定准则：连续 $\implies$ Borel 可测　proofs/imp.continuous-borel.md
- `def.continuous` 连续：用到了定义 连续　proofs/dep.continuous-continuous-measurable.md

refs: Folland, Real Analysis, §2.1；Halmos, Measure Theory, §18

## 说明
连续的定义就是「开集的原像开」；而开集生成 $\mathfrak{B}_Y$，用上一条的判定准则 (2) 立刻得到。
