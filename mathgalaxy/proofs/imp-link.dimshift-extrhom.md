# Ext 就是 RHom + 长正合列 + 投射没有高次 Ext $\implies$ 维数转移
`imp-link.dimshift-extrhom` · 推出 · strong 边 · 根 `../`

`prop.ext-is-rhom` Ext 就是导出 Hom + `thm.long-exact` 长正合列 + `prop.ext-projective-vanishes` 投射对象没有高次 Ext → `prop.dimension-shift` 维数转移

取 $N$ 的内射消解 $N \to I^{\bullet}$。$I^{k}$ 内射，故 $\operatorname{Hom}(-, I^{k})$ 正合，把 $0 \to K \to P \to M \to 0$ 逐项作用后得到**复形的短正合列**
$$0 \to \operatorname{Hom}(M, I^{\bullet}) \to \operatorname{Hom}(P, I^{\bullet}) \to \operatorname{Hom}(K, I^{\bullet}) \to 0 .$$
由「短正合列给出长正合列」取上同调，得
$$\cdots \to \operatorname{Ext}^{n}(M, N) \to \operatorname{Ext}^{n}(P, N) \to \operatorname{Ext}^{n}(K, N) \xrightarrow{\ \delta\ } \operatorname{Ext}^{n+1}(M, N) \to \operatorname{Ext}^{n+1}(P, N) \to \cdots$$
（$\operatorname{Ext}^{n}(-, N) = R^{n}\operatorname{Hom}(-, N)$ 由「Ex

> 续见 proofs/imp-link.dimshift-extrhom.2.md
