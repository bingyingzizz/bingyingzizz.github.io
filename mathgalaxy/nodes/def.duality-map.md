# 对偶配对 φ_g　`def.duality-map`
由 g 给出的线性泛函 $\varphi_g(f) = \int f\cdot g$
layer 18 · 定义 · L^p 空间 · 分析学

设 $p, q$ 共轭，$g \in L^q$。定义 $L^p$ 上的线性泛函

$$\varphi_g(f) := \int f g \, d\mu$$

## 为什么成立（入边，证明在 proofs/）
- `def.lp-norm` L^p 范数：用到了定义 L^p 范数　proofs/def-dep.lp-norm-duality-map.md
- `def.conjugate-exponents` 共轭指数：用到了定义 共轭指数　proofs/def-dep.conjugate-duality-map.md
- `def.integral-complex` 复函数的积分：用到了定义 复函数的积分　proofs/def-dep.integral-complex-duality-map.md
- `def.essential-sup` 本性上界与 L^∞：用到了定义 本性上界与 L^∞　proofs/def-dep.essential-sup-duality-map.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q
- 被 `prop.duality-isometry` ‖g‖_q = ‖φ_g‖ 用
- 被 `prop.bounded-functional-gives-lq` 有界 ⟹ g ∈ L^q 用

- …另有出边，续页见 `nodes/def.duality-map.2.md`

refs: Folland, Real Analysis, §6.2

> 说明见 `notes/def.duality-map.md`
