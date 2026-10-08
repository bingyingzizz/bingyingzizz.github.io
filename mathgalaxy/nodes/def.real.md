# 实数系 ℝ　`def.real`
实数系 $\mathbb{R}$（由 Cauchy 列构造）
layer 11 · 定义 · 数系的构造 · 集合论+分析学

记 $\mathcal{C}$ 为全体**有理 Cauchy 列**，$\sim$ 是「差为**零列**」这个等价关系（见「Cauchy 列与零列」）。令

$$\mathbb{R} := \mathcal{C} / \sim$$

元素是等价类 $[x_n]$。运算**逐项**定义，序用代表元定义：
> 陈述续见 `nodes/def.real.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.cauchy-null` Cauchy 列与零列：用到了定义 Cauchy 列与零列　proofs/dep.cauchy-null-real.md
- `def.quotient-set` 商集与等价类：用到了定义 商集与等价类　proofs/dep.quotient-real.md
- `def.poset` 偏序集：用到了定义 偏序集　proofs/def-dep.poset-real.md

## 它能推出什么 / 谁在用它
- 被 `def.extended-real` 扩充实数 [−∞,+∞] 用
- 被 `def.interval` 区间 用
- 被 `def.sequence-limit` 数列极限 用
- 被 `def.complex` 复数 ℂ 用

- …另有出边，续页见 `nodes/def.real.3.md`

refs: Rudin, Principles of Mathematical Analysis, Ch. 3；Tao, Analysis I, Ch. 5

> 说明见 `notes/def.real.md`
