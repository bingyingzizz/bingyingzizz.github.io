# L^p 范数　`def.lp-norm`
$L^p$ 范数与 $L^p$ 空间
layer 17 · 定义 · L^p 空间 · 分析学

固定测度空间 $(X, \mathcal{M}, \mu)$。对可测 $f$ 与 $0 < p < \infty$ 定义

$$\|f\|_p := \left[ \int |f|^p \, d\mu \right]^{1/p}$$

以及

$$L^p(X, \mathcal{M}, \mu) := \{\, f : X \to \mathbb{C} : f \text{ 可测},\ \|f\|_p < \infty \,\}$$

## 为什么成立（入边，证明在 proofs/）
- `def.complex` 复数 ℂ：用到了定义 复数 ℂ　proofs/dep.complex-lp.md
- `def.measurable-function` 可测函数：用到了定义 可测函数　proofs/def-dep.measurable-fn-lp-norm.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-lp-norm.md
- `def.integral-nonneg` 非负函数的积分：用到了定义 非负函数的积分　proofs/def-dep.nonneg-integral-lp-norm.md

## 它能推出什么 / 谁在用它
- 被 `thm.holder` Hölder 不等式 用
- 被 `thm.minkowski` Minkowski 不等式 用
- 被 `thm.lp-banach` L^p 是 Banach 空间 用
- 被 `cor.lp-reflexive` L^p 自反 用

- …另有出边，续页见 `nodes/def.lp-norm.2.md`

refs: Folland, Real Analysis, §6.1

> 说明见 `notes/def.lp-norm.md`
