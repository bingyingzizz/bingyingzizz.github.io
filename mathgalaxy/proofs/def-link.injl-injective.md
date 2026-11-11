# 内射性逐层抬起链映射
`def-link.injl-injective` · 推出 · strong 边 · 根 `../`

`prop.injective-criterion` 内射对象的判据 + `def.projective-object` 投射 / 内射对象 → `prop.injective-resolution-lift` 内射消解之间的提升

比较定理要从 $F^{0}$ 逐层造出 $F^{n+1} : I^{n+1} \to J^{n+1}$ 使 $Fd = dF$。
第 $0$ 层：$M \hookrightarrow I^{0}$ 是单射，复合 $M \to N \to J^{0}$ 由 $J^{0}$ 的内射性（`def.projective-object`）抬成 $F^{0}$。
归纳步同理：障碍映射 $I^{n+1} \to J^{n+1}$ 沿单射 $I^{n} \hookrightarrow I^{n+1}$ 抬起，用的正是 `prop.injective-criterion` 的抬起性质。∎

> 提升的每一步都靠内射对象抬起映射（判据见 `prop.injective-criterion`）。
