# imp.ext-is-rhom
`imp.ext-is-rhom` · 推出 · strong 边 · 根 `../`

`def.ext` 扩展群 Ext + `def.internal-hom` 内 Hom → `prop.ext-is-rhom` Ext 就是导出 Hom

于是由「上有界内射复形里 Hom 就是导出 Hom」
$$\operatorname{Ext}^{n}(M, I^{\bullet}) = \operatorname{Hom}_{D}(M, I^{\bullet}[n]) = \operatorname{Hom}_{\mathbf{K}}(M, I^{\bullet}[n]) = H^{0}\bigl(\operatorname{Hom}(M, I^{\bullet}[n])\bigr) = H^{n}\bigl(\operatorname{Hom}(M, I^{\bullet})\bigr),$$
而最右边正是 $R^{n}\operatorname{Hom}(M, I^{\bullet})$（内射复形上 $R\operatorname{Hom} = \operatorname{Hom}$）。
**最后那步 $\operatorname{Hom}_{\mathbf{K}} = H^{0}(\operatorname{Hom})$ 要交代一句**：
- $\operatorname{Hom}_{C}(M, I^{\bullet}) = Z^{0}\bigl(\operatorname{Hom}(M, I^{\bullet})\bigr)$ —— 链映射就是「$f : M \to I^{0}$ 且 $d^{0} f = 0$」，即 $0$-闭上链；
- $f$ 同伦于零 $\iff$ $f = d^{0} \circ s$（$M$ 

> 续见 proofs/imp.ext-is-rhom.3.md
