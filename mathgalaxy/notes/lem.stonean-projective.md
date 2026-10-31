# Stonean 给出有限表现投射对象　`lem.stonean-projective`　·　说明
根 `../`

要证的等价形式是：函子 $M \mapsto \operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot F, M) \cong \Gamma(F, M)$ 保满态射与滤过余极限。前半由「自由紧 Hausdorff 空间在 $\mathrm{Cond}$ 里投射」给出，后半由截面函子的构造给出 —— 而截面函子实际上**保所有余极限**。

**证明。** 由张量—Hom 伴随，$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Z}\cdot F, M) \cong M(F) = \Gamma(F, M)$ ✓，所以只需看 $\Gamma(F,-)$。
- **保满态射**：上一条说 $\Gamma(F,-)$ 保**所有**余极限，特别地保余核；$v$ 满 $\iff$ $\operatorname{coker} v = 0$ $\implies$ $\operatorname{coker}\Gamma(v) = 0$ $\implies$ $\Gamma(v)$ 满 ✓；
- **保滤过余极限**：同样由「保所有余极限」✓。
而标准判据是：$P$ **投射** $\iff$ $\operatorname{Hom}(P,-)$ 保满态射；$P$ **有限表现** $\iff$ $\operatorname{Hom}(P,-)$ 保滤过余极限。两条合起来，$\mathbb{Z}\cdot F$ 就是有限表现的投射对象。∎
