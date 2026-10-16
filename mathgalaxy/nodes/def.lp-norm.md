# L^p 范数　`def.lp-norm`
$L^p$ 范数与 $L^p$ 空间
layer 18 · 定义 · L^p 空间 · 分析学
[在星图里打开](../#n=def.lp-norm)　·　[节点索引](../index.md)

固定测度空间 $(X, \mathcal{M}, \mu)$。对可测 $f$ 与 $0 < p < \infty$ 定义

$$\|f\|_p := \left[ \int |f|^p \, d\mu \right]^{1/p}$$

以及

$$L^p(X, \mathcal{M}, \mu) := \{\, f : X \to \mathbb{C} : f \text{ 可测},\ \|f\|_p < \infty \,\}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.complex`](../nodes/def.complex.md) 复数 ℂ：用到了定义 复数 ℂ　[proofs/dep.complex-lp.md](../proofs/dep.complex-lp.md)

- …另有入边，续页见 [nodes/def.lp-norm.2.md](./def.lp-norm.2.md)

## 它能推出什么 / 谁在用它
- 被 [`thm.holder`](../nodes/thm.holder.md) Hölder 不等式 用
- 被 [`thm.minkowski`](../nodes/thm.minkowski.md) Minkowski 不等式 用

- …另有出边，续页见 [nodes/def.lp-norm.3.md](./def.lp-norm.3.md)

refs: Folland, Real Analysis, §6.1

> 说明见 `notes/def.lp-norm.md`

引用：`def.lp-norm`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
