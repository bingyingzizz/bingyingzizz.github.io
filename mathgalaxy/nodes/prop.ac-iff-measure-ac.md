# 函数绝对连续 ⟺ 测度绝对连续　`prop.ac-iff-measure-ac`
命题：F 绝对连续 $\iff \mu_F \ll m$
layer 20 · 命题 · 有界变差与绝对连续 · 分析学

设 $F \in NBV$。则

$$F\text{ 绝对连续} \iff \mu_F \ll  m$$

## 为什么成立（入边，证明在 proofs/）
- `prop.nbv-derivative` NBV 函数的导数与测度的关系 + `thm.ac-epsilon-delta` 绝对连续的 ε–δ 刻画：$\mu_F \ll m$ 的 $\varepsilon$–$\delta$ 刻画 $\implies$ 函数绝对连续 $\iff$ 测度绝对连续　proofs/imp.ac-measure.md
- `def.ac-function` 绝对连续函数：用到了定义 绝对连续函数　proofs/def-link.ac-function-ift.md
- `def.absolute-continuity` 绝对连续：用到了定义 绝对连续　proofs/def-link.ac-measure-ift.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.ftc-lebesgue` 微积分基本定理（Lebesgue 版）

refs: Folland, Real Analysis, Theorem 3.35

> 说明见 `notes/prop.ac-iff-measure-ac.md`
