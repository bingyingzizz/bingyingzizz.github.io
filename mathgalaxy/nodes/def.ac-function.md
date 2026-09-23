# 绝对连续函数　`def.ac-function`
绝对连续函数 AC（Absolutely Continuous Function）
layer 13 · 定义 · 有界变差与绝对连续 · 分析学

函数 $F : [a, b] \to \mathbb{C}$ 是**绝对连续的**，当且仅当

$$\forall\varepsilon > 0, \exists\delta > 0 :\text{ 任意有限个两两不交的区间} (a_j, b_j) \subseteq [a, b]\text{ 满足} \sum(b_j - a_j) < \delta,\text{ 就一定有} \sum|F(b_j) - F(a_j)| < \varepsilon$$

## 为什么成立（入边，证明在 proofs/）
- `def.interval` 区间：用到了定义 区间　proofs/dep.interval-bv.md

## 它能推出什么 / 谁在用它
- 被 `prop.ac-iff-measure-ac` 函数绝对连续 ⟺ 测度绝对连续 用
- 被 `thm.ftc-lebesgue` 微积分基本定理（Lebesgue 版） 用
- 被 `lem.ac-subset-bv` AC ⊆ BV 用

refs: Folland, Real Analysis, §3.5

> 说明见 `notes/def.ac-function.md`
