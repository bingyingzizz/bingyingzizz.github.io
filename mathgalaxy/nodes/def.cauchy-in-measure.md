# 依测度 Cauchy　`def.cauchy-in-measure`
依测度 Cauchy 序列
layer 14 · 定义 · 可测函数与收敛 · 分析学

可测函数列 $\{f_n\}$ 是**依测度 Cauchy 的**，当且仅当

$$\forall\varepsilon > 0, \mu(\{x : |f_n(x) - f_m(x)| \ge \varepsilon\}) \to 0\quad  (m, n \to \infty)$$

即：在测度意义下，下标够大之后各项彼此越来越近。

## 为什么成立（入边，证明在 proofs/）
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-dep.measurable-fn-cauchy-in-measure.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-cauchy-in-measure.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.cauchy-in-measure` 依测度 Cauchy ⟹ 收敛
- 被 `thm.cauchy-in-measure` 依测度 Cauchy ⟹ 收敛 用

refs: Folland, Real Analysis, §2.4

> 说明见 `notes/def.cauchy-in-measure.md`
