# 积分绝对值不等式　`prop.integral-abs-ineq`
命题：$|\int f| \le \int |f|$
layer 19 · 命题 · 积分 · 分析学

设 $f \in L^1(\mu)$，则

$$| \int f d\mu | \le \int |f| d\mu$$

## 为什么成立（入边，证明在 proofs/）
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-integral-abs.md
- `def.integral-complex` 复函数的积分：用到了定义 复函数的积分　proofs/def-link.integral-complex-abs.md

refs: Folland, Real Analysis, Prop. 2.22

## 说明
复情形：取 $\alpha = e^{-i\theta}$ 使 $\alpha\int f$ 是实数且等于 $|\int f|$，则 $|\int f| = \int \alpha f = \int \operatorname{Re}(\alpha f) \le \int|\alpha f| = \int|f|$。
