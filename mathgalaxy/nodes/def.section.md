# 截口　`def.section`
截口（Section）$E_{x}$ 与 $E^{y}$
layer 6 · 定义 · 乘积测度与 Fubini · 分析学

设 $E \subseteq X \times Y$。对 $x \in X$、$y \in Y$ 定义
> 陈述续见 `nodes/def.section.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.product` 笛卡尔积存在：笛卡尔积存在 $\implies$ 可以谈截口　proofs/imp.product-section.md
- `def.pair` 有序对：用到了定义 有序对　proofs/def-link.pair-section.md
- `def.function` 函数：用到了定义 函数　proofs/def-link.function-section.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-section.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.section-measurable` 截口可测
- 被 `prop.section-measurable` 截口可测 用
- 被 `thm.fubini-tonelli` Fubini–Tonelli 用

refs: Folland, Real Analysis, §2.5

## 说明
直观：把平面图形用一根竖线（或横线）切一刀，切出来的那条线段就是截口。

截口是 Fubini 定理的语言：重积分 $\iint f d(\mu \times \nu)$ 就是「先沿截口积一次，再把各条截口的积分对另一变量积一次」。
