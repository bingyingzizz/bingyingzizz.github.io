# Lebesgue–Radon–Nikodym 定理　`thm.lebesgue-radon-nikodym`
Lebesgue–Radon–Nikodym 定理：$\nu = \lambda + \rho$，$\lambda \perp \mu$，$\rho \ll \mu$
layer 20 · 定理 · 符号测度与分解 · 分析学

设 $\nu$ 是 **$\sigma$有限**符号测度、$\mu$ 是 **$\sigma$有限**正测度，都在 $(X, \mathcal{M})$ 上。则存在**唯一**的一对 $\sigma$有限符号测度 $\lambda$、$\rho$ 使
> 陈述续见 `nodes/thm.lebesgue-radon-nikodym.2.md`


## 为什么成立（入边，证明在 proofs/）
- `lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差：「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym　proofs/imp.lebesgue-rn.md
- `def.absolute-continuity` 绝对连续：用到了定义 绝对连续　proofs/def-link.ac-rn.md
- `def.mutually-singular` 相互奇异：用到了定义 相互奇异　proofs/def-link.singular-rn.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.riesz-representation-lp` (L^p)* ≅ L^q

refs: Folland, Real Analysis, Theorem 3.8

> 说明见 `notes/thm.lebesgue-radon-nikodym.md`
