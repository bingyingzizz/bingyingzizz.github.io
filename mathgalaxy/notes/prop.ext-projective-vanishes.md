# 投射对象没有高次 Ext　`prop.ext-projective-vanishes`　·　说明
根 `../`

**证明。** $P$ **投射**意味着函子 $\operatorname{Hom}_{\mathcal{A}}(P, -)$ **正合** ✓。而 $P$ 的投射消解可以取成
$$\cdots \to 0 \to 0 \to P \xrightarrow{\ 1\ } P \to 0,$$
即「长度 $0$ 的消解」（$P$ 自己就是投射的，不需要再找覆盖）✓。把 $\operatorname{Hom}(P, -)$ 作用在 $M$ 的内射消解 $M \to I^{\bullet}$ 上：因为 $\operatorname{Hom}(P,-)$ 正合、$M \to I^{\bullet}$ 正合，复形 $\operatorname{Hom}(P, I^{\bullet})$ 只可能在 $0$ 次有上同调 ✓，即
$$R^{n}\operatorname{Hom}(P, M) = \operatorname{Ext}^{n}(P, M) = 0 \quad (n > 0) ✓$$
（也可以直接从 $\operatorname{RHom}(P, M) = \operatorname{Hom}(P, M)$ 这件事读出来：正合函子的右导出函子就是它自己。）∎

⭐ 对偶地：**内射对象没有高次 Ext**（$\operatorname{Ext}^{n}(M, I) = 0$，$n>0$）—— 这两条合起来就是「投射 / 内射对象可以拿来替代消解里的项」的全部理由。
