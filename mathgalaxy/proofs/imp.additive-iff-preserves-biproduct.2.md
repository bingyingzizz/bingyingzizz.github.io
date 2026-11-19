# imp.additive-iff-preserves-biproduct
`imp.additive-iff-preserves-biproduct` · 推出 · strong 边 · 根 `../`

`def.additive-functor` 加法函子 + `def.zero-object` 零对象与直和 + `def.additive-category` 加法范畴 → `prop.additive-iff-preserves-biproduct` 加法函子的刻画

$F$ 保积、保余积，故 $F(\Delta_{M}) = \Delta_{FM}$、$F(\nabla_{N}) = \nabla_{FN}$（这三个映射都由「与投影 / 含入复合是什么」唯一刻画，而 $F$ 保投影与含入），且 $F(f \oplus g) = Ff \oplus Fg$（由四角刻画同样唯一）。

于是
$$F(f+g) = F(\nabla_{N})F(f\oplus g)F(\Delta_{M}) = \nabla_{FN}(Ff\oplus Fg)\Delta_{FM} = Ff + Fg ✓$$
故 $\operatorname{Hom}(M,N) \to \operatorname{Hom}(FM,FN)$ 保加法；它当然保零，所以是群同态，即 $F$ 加法 ✓。
**③ 有限积 / 有限余积**：加法范畴里有限积、有限余积、直和三者重合（见「直和就是积」），所以三个条件说的是同一件事；空积是终对象、空余积是始对象，都是零对象 ✓。∎
