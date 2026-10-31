# Poincaré 引理　`lem.poincare-lemma`　·　说明
根 `../`

**关键的是一条链同伦**：存在线性映射 $K : \Omega^{k}(U) \to \Omega^{k-1}(U)$（沿 $x \mapsto tx$ 的「积分」，$t \in [0,1]$）使

$$\mathrm{d}K + K\mathrm{d} = \operatorname{id}_{\Omega^{k}}\qquad (k \ge 1),$$

于是在 $\mathrm{d}\omega = 0$ 时 $\omega = \mathrm{d}(K\omega)$，取 $\eta = K\omega$ 即可。$K$ 的具体公式是一段含内乘 $\iota_{X}$ 的积分，本节点不展开 —— 重要的是「存在 $K$」这件事，它把「同伦」翻译成了「代数」。

**星形去不掉**：$U = \mathbb{R}^{2}\setminus\{0\}$ 上的角形式 $\omega = \frac{x\,\mathrm{d}y - y\,\mathrm{d}x}{x^{2}+y^{2}}$ 满足 $\mathrm{d}\omega = 0$，但 $\int_{S^{1}}\omega = 2\pi \ne 0$；若 $\omega = \mathrm{d}\eta$，由 Stokes 定理得 $\int_{S^{1}}\mathrm{d}\eta = \int_{\partial S^{1}}\eta = 0$，矛盾。所以 $H^{1}(\mathbb{R}^{2}\setminus\{0\}) \ne 0$ —— 一个洞就破坏了引理。

> 续见 notes/lem.poincare-lemma.2.md
