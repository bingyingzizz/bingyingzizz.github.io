# Stonean 上 Breen–Deligne 的谱序列　`prop.breen-deligne-ss-stonean`　·　说明
根 `../`

**证明。** 取 $M$ 的 Breen–Deligne 分解 $F(M)^{\bullet} \twoheadrightarrow M$，沿 Stonean 空间 $S$ 基变换（张量 $\mathbb{Z}[S]$），再对函子 $\operatorname{Hom}_{\mathbb{Z}}(-, N)$ 用「先用消解算、再用测试空间算」的标准谱序列：
$$E^{p,q}_{1} = \operatorname{Ext}^{q}_{\mathbb{Z}}\bigl(F(M)^{p}\cdot S,\ N\bigr) \;\Longrightarrow\; \operatorname{Ext}^{p+q}_{\mathbb{Z}}\bigl(F(M)^{\bullet}\cdot S,\ N\bigr).$$
- **左端**：$F(M)^{p}\cdot S = \bigoplus_{i} \mathbb{Z}\cdot M^{s_{p,i}} \otimes \mathbb{Z}[S] = \bigoplus_{i} \mathbb{Z}\cdot\bigl(M^{s_{p,i}}\times S\bigr)$，于是由「凝聚态上同调 = 自由对象上的 Ext」得 $\operatorname{Ext}^{q}_{\mathbb{Z}}(\mathbb{Z}\cdot(M^{s_{p,i}}\times S), N) = H^{q}\bigl(M^{s_{p,i}}\times S,\ N\bigr)$。
- **右端**：$\mathbb{Z}[S]$ **平坦**，故 $F(M)^{\bullet}\cdot S \to M\cdot S$ 仍是拟同构；再由 Stonean 上的截面公式（$\ope

> 续见 notes/prop.breen-deligne-ss-stonean.3.md
