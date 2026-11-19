# imp.additive-iff-preserves-biproduct
`imp.additive-iff-preserves-biproduct` · 推出 · strong 边 · 根 `../`

`def.additive-functor` 加法函子 + `def.zero-object` 零对象与直和 + `def.additive-category` 加法范畴 → `prop.additive-iff-preserves-biproduct` 加法函子的刻画

**证明。** **① 加法 $\implies$ 保双积。** $F$ 加法意味着每个 $\operatorname{Hom}(M,N) \to \operatorname{Hom}(FM,FN)$ 是群同态。若 $M$ 是 $M_{1},M_{2}$ 的双积，$F$ 把三条等式送到
$$F(p_{k})F(i_{k}) = 1, \qquad F(i_{1})F(p_{1}) + F(i_{2})F(p_{2}) = 1_{F(M)},$$
这正是「$F(M)$ 是 $F(M_{1}), F(M_{2})$ 的双积」的定义 ✓；有限多支同理。零对象：$1_{F(0)} = F(1_{0}) = F(0_{0}) = 0_{F(0)}$（群同态把零元送到零元），故 $F(0)$ 是零对象 ✓。
**② 保双积与零对象 $\implies$ 加法。** 用上面的关键公式 $f + g = \nabla_{N}(f\oplus g)\Delta_{M}$。

> 续见 proofs/imp.additive-iff-preserves-biproduct.2.md
