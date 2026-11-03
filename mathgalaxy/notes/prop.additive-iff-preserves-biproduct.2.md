# 加法函子的刻画　`prop.additive-iff-preserves-biproduct`　·　说明
根 `../`

于是
$$F(f+g) = F(\nabla_{N})F(f\oplus g)F(\Delta_{M}) = \nabla_{FN}(Ff\oplus Fg)\Delta_{FM} = Ff + Fg ✓$$
故 $\operatorname{Hom}(M,N) \to \operatorname{Hom}(FM,FN)$ 保加法；它当然保零，所以是群同态，即 $F$ 加法 ✓。
**③ 有限积 / 有限余积**：加法范畴里有限积、有限余积、直和三者重合（见「直和就是积」），所以三个条件说的是同一件事；空积是终对象、空余积是始对象，都是零对象 ✓。∎

⭐ 实用价值：验一个函子加法，只需验它**保双积**，不必去碰 $\operatorname{Hom}$ 上的群结构。

**四条的等价全靠「加法范畴里有限积 = 有限余积 = 双积」这一条**：

> 续见 notes/prop.additive-iff-preserves-biproduct.3.md
