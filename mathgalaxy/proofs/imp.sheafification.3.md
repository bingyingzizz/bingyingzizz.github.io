# Čech 函子做两次 $\implies$ 层化
`imp.sheafification` · 推出 · strong 边 · 根 `../`

`def.cech-functor` Čech 函子 + `prop.cech-properties` Čech 函子的性质 → `thm.sheafification` 层化

这里只差最后一步：要用「$F$ 是层」把 $\operatorname{Hom}(\operatorname{Hom}(R, T), F(X))$ 换回 $T(X)$ 那一侧 —— 这一步是米田引理与层条件的联手（$\operatorname{Hom}(h_{X}, F) \cong \operatorname{Hom}(R, F)$ 对 $R \in J(X)$ 成立）。逐项套回去即可。于是 $\operatorname{Hom}(\widehat{H}(T), F) \cong \operatorname{Hom}(T, F)$，再对 $\widehat{H}(T)$ 用一次（此时它是分离的、用到性质 3）就得到 $\operatorname{Hom}(T^{\sharp}, F) \cong \operatorname{Hom}(T, F)$。∎

> 续见 proofs/imp.sheafification.4.md
