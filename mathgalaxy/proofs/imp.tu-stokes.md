# 一元微积分基本定理 $\implies$ Stokes 定理
`imp.tu-stokes` · 推出 · strong 边 · 根 `../`

`def.integral-form` 形式的积分 + `def.exterior-derivative` 外微分 → `thm.stokes` Stokes 定理

**化到半空间。** 用单位分解把 $\omega$ 拆成有限个支在保向卡里的形式，每块化到 $\mathbb{H}^{n} = \{x^{n}\le 0\}$ 中的方块 $Q$ 上，于是只需证 $\int_{Q}\mathrm{d}\omega = \int_{\partial Q}\omega$。

**写出分量。** 记 $\widehat{\mathrm{d}x^{i}}$ 为「略去该因子」，则任意 $(n-1)$-形式可唯一写成

$$\omega = \sum_{i=1}^{n}(-1)^{i-1}f_{i}\,\mathrm{d}x^{1}\wedge\cdots\widehat{\mathrm{d}x^{i}}\wedge\cdots\wedge\mathrm{d}x^{n},$$

于是 $\mathrm{d}\omega = \sum_{i}\partial_{i}f_{i}\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$。

**逐项积分。** 对 $i<n$，$f_{i}$ 在 $x^{i}$ 方向有紧支，由 Fubini 定理与一元微积分基本定理

$$\int_{Q}\partial_{i}f_{i}\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{n} = 0 .$$

> 续见 proofs/imp.tu-stokes.2.md
