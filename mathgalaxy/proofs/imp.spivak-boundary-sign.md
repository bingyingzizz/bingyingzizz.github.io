# 逐面算行列式 $\implies$ 代数边界就是诱导定向的边界
`imp.spivak-boundary-sign` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 + `def.boundary-manifold` 带边流形 → `prop.boundary-sign-convention` 边界的符号约定

只需算 $c = \operatorname{id}$ 的情形：一般保向微分同胚 $c$ 只是把每张面整体重参数化，行列式的符号不变（保向性正是为此而设）。

取面 $F_{i,\alpha} = \{x^{i} = \alpha\}\subseteq I^{n}$。它的切空间由 $e_{1},\ldots,\widehat{e_{i}},\ldots,e_{n}$ 张成；把编号按 $j<i$、$j>i$ 的次序压紧成 $y^{1},\ldots,y^{n-1}$，则 $c_{(i,\alpha)}$ 的微分把 $\partial_{y^{1}},\ldots,\partial_{y^{n-1}}$ 送到这组向量，且保持次序。记这组向量为 $v$。

**（1）外法向。** $F_{i,\alpha}$ 相对 $I^{n}$ 的外单位法向是 $N = (-1)^{\alpha+1}e_{i}$：$\alpha = 0$ 时外法向是 $-e_{i}$，$\alpha = 1$ 时是 $+e_{i}$。

> 续见 proofs/imp.spivak-boundary-sign.2.md
