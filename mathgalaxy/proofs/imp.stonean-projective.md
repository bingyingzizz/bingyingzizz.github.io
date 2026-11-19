# imp.stonean-projective
`imp.stonean-projective` · 推出 · strong 边 · 根 `../`

`def.projective-object` 投射 / 内射对象 + `def.condensed-set` 凝聚态集 + `def.abelian-category` 阿贝尔范畴 + `def.tensor-product-vs` 张量积（向量空间） → `lem.stonean-projective` Stonean 给出有限表现投射对象

**证明。** 由张量—Hom 伴随，$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot F, M) \cong M(F) = \Gamma(F, M)$ ✓，所以只需看 $\Gamma(F,-)$。
- **保满态射**：上一条说 $\Gamma(F,-)$ 保**所有**余极限，特别地保余核；$v$ 满 $\iff$ $\operatorname{coker} v = 0$ $\implies$ $\operatorname{coker}\Gamma(v) = 0$ $\implies$ $\Gamma(v)$ 满 ✓；


- **保滤过余极限**：同样由「保所有余极限」✓。
而标准判据是：$P$ **投射** $\iff$ $\operatorname{Hom}(P,-)$ 保满态射；$P$ **有限表现** $\iff$ $\operatorname{Hom}(P,-)$ 保滤过余极限。两条合起来，$\mathbb{Z}\cdot F$ 就是有限表现的投射对象。

∎
