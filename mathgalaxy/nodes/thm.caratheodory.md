# Carathéodory 定理　`thm.caratheodory`
Carathéodory 定理：$\mu^{*}$-可测集构成 σ-代数，$\mu^{*}$ 在其上是完备测度
layer 15 · 定理 · 测度的构造 · 分析学

设 $\mu^{*}$ 是 $X$ 上的外测度，$\mathcal{M}$ 是全体 $\mu^{*}$-可测集。则
> 陈述续见 `nodes/thm.caratheodory.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.outer-measure` 外测度 + `def.caratheodory-measurable` μ*-可测集：外测度 + 可切集 $\implies$ σ-代数与完备测度　proofs/imp.outer-carath.md
- `def.outer-measure` 外测度：用到了定义 外测度　proofs/def-link.outer-carath-thm.md
- `def.caratheodory-measurable` μ*-可测集：用到了定义 μ*-可测集　proofs/def-link.carathmeasurable-thm.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.caratheodory-extension` 预测度还原
- ⇒ `def.product-measure` 乘积测度

refs: Halmos, Measure Theory, §11；Folland, Real Analysis, Theorem 1.11

> 说明见 `notes/thm.caratheodory.md`
