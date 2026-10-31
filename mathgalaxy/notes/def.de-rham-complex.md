# de Rham 上同调　`def.de-rham-complex`　·　说明
根 `../`

**它测什么**：$H^{k} = 0$ 意味着「闭就恰当」；$H^{k} \ne 0$ 说明存在闭而不恰当的形式。$\mathbb{R}^{2}\setminus\{0\}$ 上的角形式 $\frac{x\,\mathrm{d}y - y\,\mathrm{d}x}{x^{2}+y^{2}}$ 闭而不恰当，它的类生成 $H^{1} \cong \mathbb{R}$，量的是「绕原点的圈数」。

**de Rham 定理（只提不证）**：$H^{k}_{\mathrm{dR}}(M) \cong H^{k}_{\mathrm{sing}}(M;\mathbb{R})$ —— 解析构造（形式 + 微分）算出的东西，等于纯拓扑构造（奇异链 + 边界）算出的东西。这一条把微分几何与代数拓扑缝在一起，是本图范畴/同调那一片的接口。

**维数有限**：$M$ 紧致时每个 $H^{k}_{\mathrm{dR}}(M)$ 都有限维，且 $k > \dim M$ 时为零。所以上同调是一组有限的数（Betti 数）。本图不证。

**局部总是零**：任意流形每点都有可缩邻域，由 Poincaré 引理（`lem.poincare-lemma`）$H^{k} = 0$（$k \ge 1$）。所以上同调**纯粹是整体**信息 —— 这就是它比局部微分不变量更有用的原因。

> 续见 notes/def.de-rham-complex.2.md
