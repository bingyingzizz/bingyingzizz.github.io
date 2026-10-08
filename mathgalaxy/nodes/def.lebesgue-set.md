# Lebesgue 集　`def.lebesgue-set`
Lebesgue 集 $L_f$
layer 21 · 定义 · 微分定理 · 分析学

设 $f \in L^1_{loc}$。定义

$$L_f := \{ x : \lim_{r\to0} \frac{1}{m(B(r, x))} \int_{B(r, x)} |f(y) - f(x)| dy = 0 \}$$

称为 $f$ 的 **Lebesgue 集**。

## 为什么成立（入边，证明在 proofs/）
- `def.locally-integrable` 局部可积：用到了定义 局部可积　proofs/def-dep.locally-integrable-lebesgue-set.md
- `def.average-operator` 平均算子 Aᵣ：用到了定义 平均算子 Aᵣ　proofs/def-dep.average-operator-lebesgue-set.md

## 它能推出什么 / 谁在用它
- 被 `thm.lebesgue-set-full` Lebesgue 集几乎处处 用
- 被 `thm.differentiation-general` 可缩族的微分定理 用

refs: Folland, Real Analysis, §3.4

> 说明见 `notes/def.lebesgue-set.md`
