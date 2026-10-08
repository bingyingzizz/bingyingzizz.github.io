# 共轭指数　`def.conjugate-exponents`
共轭指数（Conjugate Exponents）
layer 13 · 定义 · L^p 空间 · 分析学

设 $1 \le p \le \infty$。称 $q$ 是 $p$ 的**共轭指数**，当且仅当

$$\frac{1}{p} + \frac{1}{q} = 1$$

（约定 $1/\infty = 0$，于是 $p = 1$ 对应 $q = \infty$，$p = \infty$ 对应 $q = 1$。）

## 为什么成立（入边，证明在 proofs/）
- `def.extended-real` 扩充实数 [−∞,+∞]：用到了定义 扩充实数 [−∞,+∞]　proofs/def-dep.extended-conjugate.md

## 它能推出什么 / 谁在用它
- 被 `thm.holder` Hölder 不等式 用
- 被 `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ 用
- 被 `thm.riesz-representation-lp` (L^p)* ≅ L^q 用
- 被 `lem.young-inequality` Young 不等式 用
- 被 `def.duality-map` 对偶配对 φ_g 用

refs: Folland, Real Analysis, §6.2

> 说明见 `notes/def.conjugate-exponents.md`
