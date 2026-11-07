# 拉回　`prop.pullback-form-manifold`　·　说明
根 `../`

(4) **保复合**：链式法则给 $\mathrm{d}(G\circ F)_{p} = \mathrm{d}G_{F(p)}\circ\mathrm{d}F_{p}$，于是 $((G\circ F)^{\ast}\omega)_{p}(v_{1},\ldots) = \omega_{G(F(p))}\bigl(\mathrm{d}G_{F(p)}\mathrm{d}F_{p}v_{1},\ldots\bigr) = (F^{\ast}(G^{\ast}\omega))_{p}(v_{1},\ldots).$ $(\operatorname{id})^{\ast} = \operatorname{id}$ 显然。∎

**小结**：(1)+(2) 说 $F^{\ast}$ 是分次代数同态，(3) 说它与微分交换，(4) 说它保复合 —— 合起来，$F^{\ast}$ 是微分分次代数之间的（反变）映射。

⭐ 这一条是 de Rham 上同调「是函子」的全部内容：$F^{\ast}$ 与 $\mathrm{d}$ 交换，故把闭形式送到闭形式、把恰当形式送到恰当形式，从而下到商空间 $F^{\ast} : H^{k}_{\mathrm{dR}}(N)\to H^{k}_{\mathrm{dR}}(M)$。方向是反的，这正是「上同调反变」的意思。

> 续见 notes/prop.pullback-form-manifold.6.md
