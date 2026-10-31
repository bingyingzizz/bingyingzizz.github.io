# 链同伦 $\mathrm{d}K + K\mathrm{d} = \operatorname{id}$ $\implies$ 闭形式恰当
`imp.mf-poincare` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.exterior-derivative` 外微分 → `lem.poincare-lemma` Poincaré 引理

$$\mathrm{d}K\omega + K\mathrm{d}\omega = i_{1}^{\ast}\omega - i_{0}^{\ast}\omega .$$

而 $i_{1} = \operatorname{id}_{U}$（$H(x,1) = x$），$i_{0}$ 是常映射 $x \mapsto 0$，故 $i_{0}^{\ast}\omega = 0$ 只要 $k \ge 1$（常映射把 $k$-形式拉成 $0$）。于是

$$\mathrm{d}K + K\mathrm{d} = \operatorname{id}_{\Omega^{k}(U)}\qquad (k \ge 1).$$

**取 $\eta$。** 若 $\mathrm{d}\omega = 0$，则 $\omega = \mathrm{d}K\omega + K(0) = \mathrm{d}(K\omega)$，取 $\eta := K\omega \in \Omega^{k-1}(U)$ 即得 $\omega$ 恰当。

> 续见 proofs/imp.mf-poincare.3.md
