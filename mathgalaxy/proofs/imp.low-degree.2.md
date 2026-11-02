# 标准复形的低次项 $\implies$ 低次正合列
`imp.low-degree` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.invariant-functor` 不变量函子 → `prop.low-degree-exact` 低次正合列

把 $\ker\delta^{0}$、$\ker\delta^{1}$、右边那一项分别认成 $M^{G}$、$Z^{1}$、$H^{1}$ 即得题述第一行。

∎

**作用平凡的情形。** 若 $g\cdot m = m$ 对一切 $g$，则 $\delta^{0}m$ 是零函数，所以 $\delta^{0} = 0$：于是 $M^{G} = \ker\delta^{0} = M$、$B^{1} = 0$，而 $Z^{1} = \{c : c(g_{1}g_{2}) = c(g_{1}) + c(g_{2})\} = \operatorname{Hom}(G, M)$。

第一行塌成 $0 \to M \to M \to \operatorname{Hom}(G,M) \to H^{1} \to 0$，读出 $H^{1} = \operatorname{Hom}(G, M)$。

∎

**第二行。** $0 \to A \to B \to C \to 0$ 是 $G$-模的短正合列，取右导出函子（$R^{0} = (-)^{G}$、$R^{n} = H^{n}$）得长正合列

> 续见 proofs/imp.low-degree.3.md
