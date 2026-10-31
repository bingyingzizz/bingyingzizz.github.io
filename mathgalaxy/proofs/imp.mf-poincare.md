# 链同伦 $\mathrm{d}K + K\mathrm{d} = \operatorname{id}$ $\implies$ 闭形式恰当
`imp.mf-poincare` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.exterior-derivative` 外微分 → `lem.poincare-lemma` Poincaré 引理

**收缩映射。** 取 $H : U \times [0,1] \to U$、$H(x,t) := tx$（星形保证它落在 $U$ 里）。记 $i_{t} : U \to U \times [0,1]$、$i_{t}(x) := (x,t)$。

**链同伦算子。** 定义 $K : \Omega^{k}(U) \to \Omega^{k-1}(U)$ 为沿 $t$ 的「纤维积分」：

$$K\omega := \int_{0}^{1} i_{t}^{\ast}\bigl(\iota_{\partial_{t}}(H^{\ast}\omega)\bigr)\,\mathrm{d}t ,$$

其中 $\iota_{\partial_{t}}$ 是内乘（把 $\mathrm{d}t$ 那一项喂进去、次数降一）。它把 $(k-1)$-形式系数对 $t$ 积分，故仍是光滑的 $(k-1)$-形式。

**同伦公式。** 对 $U \times [0,1]$ 上的形式用「$\mathrm{d}$ 与内乘的分次 Leibniz 律」，再对 $t$ 积分、用微积分基本定理处理 $\partial_{t}$ 那一项，得

> 续见 proofs/imp.mf-poincare.2.md
