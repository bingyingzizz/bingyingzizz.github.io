# 绝对值 |x|　`def.abs`
绝对值 $|x|$（Absolute Value）
layer 8 · 定义 · 数系的构造 · 集合论+分析学

设 $K$ 是**有序域**（$\mathbb{Q}$ 与 $\mathbb{R}$ 都是），$x \in K$。定义

$$|x| := \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases} \qquad\text{即}\qquad |x| = \max\{x, -x\}$$

于是 $|x| \ge 0$ 恒成立，且 $|x| = 0 \iff x = 0$。

## 为什么成立（入边，证明在 proofs/）
- `def.ordered-field` 有序域：用到了定义 有序域　proofs/dep.ordered-abs.md

## 它能推出什么 / 谁在用它
- 被 `def.cauchy-null` Cauchy 列与零列 用
- ⇒ `thm.triangle` 三角不等式

refs: Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/def.abs.md`
