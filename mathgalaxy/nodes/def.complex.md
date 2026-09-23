# 复数 ℂ　`def.complex`
复数系 $\mathbb{C}$（Complex Numbers）
layer 12 · 定义 · 数系的构造 · 分析学+抽象代数

**复数系** $\mathbb{C} := \mathbb{R}^2$，配以下运算：

$$(a, b) + (c, d) := (a + c, b + d), \qquad (a, b)(c, d) := (ac - bd, ad + bc)$$

记 $i := (0, 1)$，则每个复数唯一地写成 $z = a + bi$（$a, b \in \mathbb{R}$）。

$\bar{z} := a - bi$ 是**共轭**，$|z| := \sqrt{a^2 + b^2}$ 是**模**；并且
> 陈述续见 `nodes/def.complex.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.real` 实数系 ℝ：用到了定义 实数系 ℝ　proofs/dep.real-complex.md

## 它能推出什么 / 谁在用它
- 被 `def.integral-complex` 复函数的积分 用
- 被 `def.complex-measure` 复测度 用
- 被 `def.lp-norm` L^p 范数 用

refs: Rudin, Real and Complex Analysis, Ch. 1

> 说明见 `notes/def.complex.md`
