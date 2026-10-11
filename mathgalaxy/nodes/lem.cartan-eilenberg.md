# Cartan–Eilenberg 分解　`lem.cartan-eilenberg`
Cartan–Eilenberg 分解（双复形内射消解）
layer 17 · 引理 · 层上同调 · 同调代数

设 $K^{\bullet}$ 是阿贝尔范畴中的**下有界**复形。则存在下有界**双复形** $I^{\bullet,\bullet}$（即 $I^{p,q} = 0$ 对 $q < 0$）与复形态射 $K^{\bullet} \to I^{\bullet,0}$，使得

- 每个 $K^{p} \to I^{p,\bullet}$ 是**内射消解**；
- 每个 $H^{p}(K^{\bullet}) \to H^{p}(I^{\bullet,\bullet})$ 也是**内射消解**。

## 为什么成立（入边，证明在 proofs/）
- `def.bicomplex` 双复形：用到了定义 双复形　proofs/def-dep.carteil-bicomplex.md
- `def.spectral-sequence` 谱序列：用到了定义 谱序列　proofs/def-dep.carteil-spectral.md

refs: Le Stum, Lemma 7.2.19

> 说明见 `notes/lem.cartan-eilenberg.md`
