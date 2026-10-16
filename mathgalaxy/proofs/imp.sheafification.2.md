# Čech 函子做两次 $\implies$ 层化
`imp.sheafification` · 推出 · strong 边 · 根 `../`

`def.cech-functor` Čech 函子 + `prop.cech-properties` Čech 函子的性质 → `thm.sheafification` 层化

**伴随性。** 要证 $\operatorname{Hom}(T^{\sharp}, F) \cong \operatorname{Hom}(T, F)$（$F$ 是层）。先证 $\operatorname{Hom}(\widehat{H}(T), F) \cong \operatorname{Hom}(T, F)$：由 $\widehat{H}$ 的定义逐点展开，

$$\operatorname{Hom}\bigl(\widehat{H}(T), F\bigr)(X) \cong \operatorname{Hom}\bigl(\widehat{H}(T)(X), F(X)\bigr)$$

而 $\widehat{H}(T)(X) = \varinjlim_{R} \operatorname{Hom}(R, T)$ 是滤过余极限，故

$$\operatorname{Hom}\bigl(\varinjlim_{R} \operatorname{Hom}(R, T),\ F(X)\bigr) \;\cong\; \varprojlim_{R} \operatorname{Hom}\bigl(\operatorname{Hom}(R, T),\ F(X)\bigr)$$

> 续见 proofs/imp.sheafification.3.md
