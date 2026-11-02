# 紧投射对象上的计算 $\implies$ 对称幺半张量积
`imp.solid-tensor` · 推出 · strong 边 · 根 `../`

`cor.solid-compact-generators` 固态的紧投射对象 + `thm.solid-derived` 固态复形与导出范畴 → `thm.solid-tensor` 固态张量积

**唯一性。** 保余极限的函子由紧投射生成元上的值决定，所以 $\otimes^{\blacksquare}$ 若存在必唯一。

**存在性（对象层）。** 定义 $M \otimes^{\blacksquare} N := (M \otimes N)^{\blacksquare}$。要证 $M \mapsto M^{\blacksquare}$ 对称幺半，即

$$(M \otimes N)^{\blacksquare} \longrightarrow (M^{\blacksquare} \otimes N^{\blacksquare})^{\blacksquare}$$

是同构。两边都保余极限，归约到 $M = \mathbb{Z}[S]$、$N = \mathbb{Z}[T]$；再用 `cor.solid-compact-generators` (iv) 的对偶计算，把两边分别算成 $Z[S \times T]^{\blacksquare}$。

> 续见 proofs/imp.solid-tensor.2.md
