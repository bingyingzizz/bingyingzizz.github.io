# Čech 函子做两次 $\implies$ 层化
`imp.sheafification` · 推出 · strong 边 · 根 `../`

`def.cech-functor` Čech 函子 + `prop.cech-properties` Čech 函子的性质 → `thm.sheafification` 层化

记 $\sharp := \widehat{H} \circ \widehat{H}$。

**落到层上。** 对任意预层 $T$，$\widehat{H}(T)$ 是**分离**的；再对分离的 $\widehat{H}(T)$ 用一次，得到的 $\widehat{H}(\widehat{H}(T))$ 是**层**（Čech 函子的性质 2）。所以 $T^{\sharp}$ 总是层。∎

**从层出发不动。** 设 $F$ 是层。由性质 3（$F$ 是层 $\iff F \to \widehat{H}(F)$ 是同构）得 $\widehat{H}(F) \cong F$，再做一次仍得到 $F$。所以 $\sharp$ 在层上是恒等 —— 这就是**幂等性** $(T^{\sharp})^{\sharp} \cong T^{\sharp}$。∎

> 续见 proofs/imp.sheafification.2.md
