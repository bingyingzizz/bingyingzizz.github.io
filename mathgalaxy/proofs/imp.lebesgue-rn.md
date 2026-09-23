# 「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym
`imp.lebesgue-rn` · 推出 · strong 边 · 根 `../`

`lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差 → `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

**I. 先设 $\nu$、$\mu$ 都有限，且 $\nu \ge 0$。**

**① 造候选函数集。** 令

$$\mathcal{F} := \{ f : X \to [0, +\infty] : \int_E f d\mu \le \nu(E)\quad  \forall E \in \mathcal{M} \}$$

则 $0 \in \mathcal{F}$，且 $\mathcal{F}$ 对**取大**封闭：若 $f, g \in \mathcal{F}$，令 $A = \{f > g\}$、$h = \max_{f, g}$，则对任意 $E$，

> 续见 proofs/imp.lebesgue-rn.2.md
