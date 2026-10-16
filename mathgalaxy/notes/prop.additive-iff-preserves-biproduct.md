# 加法函子的刻画　`prop.additive-iff-preserves-biproduct`　·　说明
根 `../`

**证明。** **① 加法 $\implies$ 保双积。** $F$ 加法意味着每个 $\operatorname{Hom}(M,N) \to \operatorname{Hom}(FM,FN)$ 是群同态。若 $M$ 是 $M_{1},M_{2}$ 的双积，$F$ 把三条等式送到
$$F(p_{k})F(i_{k}) = 1, \qquad F(i_{1})F(p_{1}) + F(i_{2})F(p_{2}) = 1_{F(M)},$$
这正是「$F(M)$ 是 $F(M_{1}), F(M_{2})$ 的双积」的定义 ✓；有限多支同理。零对象：$1_{F(0)} = F(1_{0}) = F(0_{0}) = 0_{F(0)}$（群同态把零元送到零元），故 $F(0)$ 是零对象 ✓。
**② 保双积与零对象 $\implies$ 加法。** 用上面的关键公式 $f + g = \nabla_{N}(f\oplus g)\Delta_{M}$。$F$ 保积、保余积，故 $F(\Delta_{M}) = \Delta_{FM}$、$F(\nabla_{N}) = \nabla_{FN}$（这三个映射都由「与投影 / 含入复合是什么」唯一刻画，而 $F$ 保投影与含入），且 $F(f \oplus g) = Ff \oplus Fg$（由四角刻画同样唯一）。于是
$$F(f+g) = F(\nabla_{N})F(f\oplus g)F(\Delta_{M}) = \nabla_{FN}(Ff\oplus Fg)\Delta_{FM} = Ff + Fg ✓$$
故 $\operatorname{Hom}(M,N) \to \operatorname{Hom}(FM,FN)$ 保加法；它

> 续见 notes/prop.additive-iff-preserves-biproduct.2.md
