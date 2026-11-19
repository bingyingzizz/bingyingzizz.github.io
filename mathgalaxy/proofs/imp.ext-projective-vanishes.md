# imp.ext-projective-vanishes
`imp.ext-projective-vanishes` · 推出 · strong 边 · 根 `../`

`def.ext` 扩展群 Ext + `def.projective-object` 投射 / 内射对象 → `prop.ext-projective-vanishes` 投射对象没有高次 Ext

**证明。** $P$ **投射**意味着函子 $\operatorname{Hom}_{\mathcal{A}}(P, -)$ **正合** ✓。而 $P$ 的投射消解可以取成
$$\cdots \to 0 \to 0 \to P \xrightarrow{\ 1\ } P \to 0,$$
即「长度 $0$ 的消解」（$P$ 自己就是投射的，不需要再找覆盖）✓。

把 $\operatorname{Hom}(P, -)$ 作用在 $M$ 的内射消解 $M \to I^{\bullet}$ 上：因为 $\operatorname{Hom}(P,-)$ 正合、$M \to I^{\bullet}$ 正合，复形 $\operatorname{Hom}(P, I^{\bullet})$ 只可能在 $0$ 次有上同调 ✓，即
$$R^{n}\operatorname{Hom}(P, M) = \operatorname{Ext}^{n}(P, M) = 0 \quad (n > 0) ✓$$
（也可以直接从 $\operatorname{RHom}(P, M) = \operatorname{Hom}(P, M)$ 这件事读出来：正合函子的右导出函子就是它自己。）∎
