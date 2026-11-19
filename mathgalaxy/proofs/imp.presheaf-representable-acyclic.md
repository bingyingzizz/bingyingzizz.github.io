# imp.presheaf-representable-acyclic
`imp.presheaf-representable-acyclic` · 推出 · strong 边 · 根 `../`

`def.presheaf` 预层 + `def.sheaf-cohomology` 层上同调 + `def.exact-functor` 正合函子 + `lem.yoneda` 米田引理 → `prop.presheaf-representable-acyclic` 预层在可表示对象上没有高次上同调

**证明。** 取截面函子 $\Gamma(h_{X}, -)$：由 Yoneda 引理
$$\Gamma(h_{X}, M) = \operatorname{Hom}_{\widehat{\mathcal{C}}}(h_{X}, M) = M(X) ✓$$
而在**预层**范畴上，「逐点取值」$M \mapsto M(X)$ 是**正合**的 ✓（预层的核、像、余核都逐点算；$M(X)$ 就是一个普通的阿贝尔群）。
正合函子的右导出函子集中在 $0$ 次（用长度 $0$ 的「消解」$M \to M$ 即可看出）✓，于是 $H^{n}(h_{X}, M) = R^{n}\Gamma(h_{X}, M) = 0$（$n > 0$）✓。∎
