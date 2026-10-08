# 拓扑斯上的阿贝尔群是 Grothendieck 范畴　`thm.topos-abelian-grothendieck`　·　说明
根 `../`

证明分三段：



- **阿贝尔**：先在预层范畴 $\widehat{\mathcal{C}}(\mathbf{Ab})$ 里逐分量验证（那里就是逐点的阿贝尔群）—— 具体的，对任意态射 $u$ 验证 $\operatorname{coker}(\ker u) \cong \ker(\operatorname{coker} u)$；再沿**正合反射**（层化）把这些等式运回层范畴。滤过余极限正合同理。
- **所有极限与余极限存在**：因为层范畴是预层范畴的反射子范畴。
- **小生成元集**：若 $S$ 是 $\mathcal{T}$ 的小生成元集，则 $\{\mathbb{Z}\cdot X : X \in S\}$ 生成 $\mathcal{T}(\mathbf{Ab})$ —— 它们的余积就是生成元。



顺带一条：$\mathbb{Z}\cdot X$ 在 $\mathcal{T}(\mathbf{Ab})$ 里**投射**（先看预层：$M \mapsto \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot h_{X}, M) \cong M(X)$ 在预层上是正合的）。
