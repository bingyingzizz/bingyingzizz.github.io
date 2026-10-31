# $j_! \dashv j^* \dashv j_*$ $\implies$ 仿射相干对偶
`imp.coherent-duality` · 推出 · strong 边 · 根 `../`

`thm.za-analytic` 有限生成代数的解析环 → `thm.coherent-duality` 仿射相干对偶

**② 投影公式。** 由 $j_!$ 的张量表达式，对 $M \in D(\mathbb{Z}^{\blacksquare})$、$N \in D(A^{\blacksquare})$，
$$f_!\big((M \otimes^L A^{\blacksquare}) \otimes^L_{A^{\blacksquare}} N\big) \cong M \otimes^L_{\mathbb{Z}^{\blacksquare}} f_! N.$$
逐项验证：$j_!$ 与张量结合律、$A'$ 上 $\mathbb{Z}$-线性结构相容。

**③ 右伴随与显式公式。** 由 ②，$f_!$ 保余极限，故由伴随函子定理它有右伴随 $f^!$；并可用余单位 $f_! f^! \to \mathrm{id}$ 把它写成
$$f^! M \cong (M \otimes^L_{\mathbb{Z}^{\blacksquare}} A^{\blacksquare}) \otimes^L_{A^{\blacksquare}} f^! \mathbb{Z}.$$
这就是材料里「先基变换到 $A$、再乘相对对偶」的分步。

> 续见 proofs/imp.coherent-duality.3.md
