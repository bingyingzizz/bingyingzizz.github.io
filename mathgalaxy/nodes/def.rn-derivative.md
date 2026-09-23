# RN 导数与 Lebesgue 分解　`def.rn-derivative`
Radon–Nikodym 导数 $d\nu/d\mu$ 与 Lebesgue 分解
layer 16 · 定义 · 符号测度与分解 · 分析学

设 $\nu \ll  \mu$（都是 $\sigma$有限的）。取定理里的 $f$，称

$$f = \frac{d\nu}{d\mu}$$

为 $\nu$ 关于 $\mu$ 的 **Radon–Nikodym 导数**（注意它定义在「$\mu$本质相同的函数类」上，不是单个函数）。

一般的分解 $\nu = \lambda + \rho$（$\lambda \perp  \mu$，$\rho \ll  \mu$）称为 $\nu$ 关于 $\mu$ 的 **Lebesgue 分解**。

## 为什么成立（入边，证明在 proofs/）
- `def.absolute-continuity` 绝对连续：用到了定义 绝对连续　proofs/def-dep.ac-rn-derivative.md
- `def.mutually-singular` 相互奇异：用到了定义 相互奇异　proofs/def-dep.mutually-singular-rn-derivative.md
- `def.measure` 测度：用到了定义 测度　proofs/def-dep.measure-rn-derivative.md

## 它能推出什么 / 谁在用它
- 被 `prop.L1-signed` L¹(ν) 与全变差 用

- …另有出边，续页见 `nodes/def.rn-derivative.2.md`

refs: Folland, Real Analysis, §3.2

> 说明见 `notes/def.rn-derivative.md`
