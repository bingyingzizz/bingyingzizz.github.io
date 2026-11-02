# 分解上乘 p 与 M 上乘 p 同伦　`lem.breen-deligne-scalar-homotopy`　·　说明
根 `../`

**证明（两步归约）。**
- **第一步：投射消解的情形。** 设 $F(M)^{\bullet}$ 是一个**投射**消解。在导出范畴里「乘 $p$」与 $[p]$ 是同一个态射（两者都诱导 $M$ 上乘 $p$），于是由「投射复形里 Hom 就是导出 Hom」的对偶版本，$[p]$ 与逐项乘 $p$ 在复形层面**同伦**。
- **第二步：Breen–Deligne 分解是「自然投射消解」。** 在拓扑斯 $\mathcal{T} = \widehat{\mathbf{Ab}^{\mathrm{op}}}$ 上取 $M := h_{\mathbb{Z}}$。对预层 $N$，
$$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot M^{s},\ N) = \operatorname{Hom}(M^{s}, N) = \operatorname{Hom}(h_{\mathbb{Z}^{s}}, N) = N(\mathbb{Z}^{s}),$$
而预层上的极限、余极限逐项计算 —— 于是 $\mathbb{Z}\cdot M^{s}$ 是 $\mathcal{T}$ 里的**投射**对象，第一步适用。
- 把 $M$ 取成 $h_{\mathbb{Z}}(M)$ 再层化，就得到任意拓扑斯上的情形。∎
