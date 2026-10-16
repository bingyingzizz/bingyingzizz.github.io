# Ext 就是 RHom　`prop.ext-is-rhom`　·　说明
根 `../`

**证明。** 右边 $\operatorname{Ext}^{n}(M, K^{\bullet}) = \operatorname{Hom}_{D}(M, K^{\bullet}[n])$，左边用内射消解算。先化到 $K^{\bullet}$ **本身就是内射复形**的情形（一般情形取内射消解 $K^{\bullet} \to I^{\bullet}$，两边都对它不变）。于是由「上有界内射复形里 Hom 就是导出 Hom」
$$\operatorname{Ext}^{n}(M, I^{\bullet}) = \operatorname{Hom}_{D}(M, I^{\bullet}[n]) = \operatorname{Hom}_{\mathbf{K}}(M, I^{\bullet}[n]) = H^{0}\bigl(\operatorname{Hom}(M, I^{\bullet}[n])\bigr) = H^{n}\bigl(\operatorname{Hom}(M, I^{\bullet})\bigr),$$
而最右边正是 $R^{n}\operatorname{Hom}(M, I^{\bullet})$（内射复形上 $R\operatorname{Hom} = \operatorname{Hom}$）。
**最后那步 $\operatorname{Hom}_{\mathbf{K}} = H^{0}(\operatorname{Hom})$ 要交代一句**：
- $\operatorname{Hom}_{C}(M, I^{\bullet}) = Z^{0}\bigl(\operatorname{Hom}(M, I^{\bullet})\bigr)$ —— 链映射就是「$f : M \to I^{0}$ 且 $d^{0} f = 0$」，即 $0$-闭上链；
- $f$ 同伦于零 $\iff$ 

> 续见 notes/prop.ext-is-rhom.2.md
