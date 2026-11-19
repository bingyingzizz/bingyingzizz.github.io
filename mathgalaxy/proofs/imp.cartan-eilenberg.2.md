# imp.cartan-eilenberg
`imp.cartan-eilenberg` · 推出 · strong 边 · 根 `../`

`def.injective-module` 内射模 + `def.spectral-sequence` 谱序列 + `def.bicomplex` 双复形 + `def.abelian-category` 阿贝尔范畴 → `lem.cartan-eilenberg` Cartan–Eilenberg 分解

**构造（归纳 + 马蹄引理）。** 记 $Z^{p} := \ker d^{p}$、$B^{p} := \operatorname{im} d^{p-1}$，于是每个 $p$ 有两条短正合列
$$0 \to Z^{p} \to K^{p} \to B^{p+1} \to 0, \qquad 0 \to B^{p} \to Z^{p} \to H^{p}(K^{\bullet}) \to 0 .$$
- 对**大序数/整个复形同时**取内射消解：先取 $K^{p}$ 的内射消解 $I^{p,\bullet}$，再用**马蹄引理**（horseshoe lemma）把它与 $B^{p+1}$、$Z^{p}$ 的消解拼起来 —— 因为 $B^{p+1}$ 与 $Z^{p}$ 的消解可以从 $K^{p}$ 的消解里「切」出来；
- 两条正合列各用一次马蹄引理，就能保证**同时**满足两个要求：每个 $K^{p} \to I^{p,\bullet}$ 是内射消解，且每个 $H^{p}(K^{\bullet}) \to H^{p}(I^{\bullet,\bullet})$ 也是内射消解（后者靠第二条正合列与「分次内射」的逐层内

> 续见 proofs/imp.cartan-eilenberg.3.md
