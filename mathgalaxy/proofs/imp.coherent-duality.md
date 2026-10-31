# $j_! \dashv j^* \dashv j_*$ $\implies$ 仿射相干对偶
`imp.coherent-duality` · 推出 · strong 边 · 根 `../`

`thm.za-analytic` 有限生成代数的解析环 → `thm.coherent-duality` 仿射相干对偶

**记号。** 设 $f : A \to A'$ 是解析环之间的映射，$f^{\mathrm{ad}/\mathbb{Z}} : \operatorname{Spec} A' \to \operatorname{Spec} A$ 是对应的 adic 谱映射，$j : \operatorname{Spec} A' \to \operatorname{Spec}(A',\mathbb{Z})$。按 `def.f-shriek`，$f_! := f^{\mathrm{ad}/\mathbb{Z}}_\ast \circ j_!$。

**① $f_!$ 保直和。** $j_!$ 是左伴随，保余极限；正常推前按纤维、$\operatorname{Spec}(A',\mathbb{Z})$ 的基变换只在有限个连通块上发生（`thm.adic-structure-sheaf` 的结构层是恒定层），故保直和。合起来 $f_!$ 保直和。

> 续见 proofs/imp.coherent-duality.2.md
