# 测度 ↔ NBV 的一一对应　`thm.borel-measure-nbv`
定理：$\mathbb{R}$ 上的复 Borel 测度 $\longleftrightarrow$ NBV 函数
layer 18 · 定理 · 有界变差与绝对连续 · 分析学

**(1)** 若 $\mu$ 是 $\mathbb{R}$ 上的复 Borel 测度，$F(x) := \mu((-\infty, x])$，则 $F \in NBV$。

**(2)** 反之，若 $F \in NBV$，则存在**唯一**的复 Borel 测度 $\mu_F$ 使

$$F(x) = \mu_F((-\infty, x])$$

而且

$$|\mu_F| = \mu_{T_F}$$

## 为什么成立（入边，证明在 proofs/）
- `lem.nbv-variation` 全变差的 NBV 性质 + `thm.bv-jordan` BV 的 Jordan 分解：NBV 的性质 $\implies$ 测度与函数的一一对应　proofs/imp.borel-nbv.md
- `def.bounded-variation` 有界变差 BV：用到了定义 有界变差 BV　proofs/def-link.bv-nbv-thm.md
- `def.measure` 测度：用到了定义 测度　proofs/def-link.measure-nbv-thm.md

refs: Folland, Real Analysis, Theorem 3.29

> 说明见 `notes/thm.borel-measure-nbv.md`
