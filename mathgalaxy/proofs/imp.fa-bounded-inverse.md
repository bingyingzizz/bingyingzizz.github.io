# 开映射 $\implies$ 逆算子有界
`imp.fa-bounded-inverse` · 推出 · strong 边 · 根 `../`

`thm.open-mapping-banach` 开映射定理（Banach 版） → `thm.bounded-inverse` 逆算子定理

$u$ 双射，故 $u^{-1} : F \to E$ 存在且线性。
$u^{-1}$ 连续 $\iff$ 每个开集 $\Omega \subseteq E$ 的原像 $(u^{-1})^{-1}(\Omega) = u(\Omega)$ 在 $F$ 中开；而开映射定理恰好说 $u$ 把开集映成开集。故 $u^{-1}$ 连续。$\blacksquare$

> 一行推导，但它依赖开映射定理的**全部**假设（两边完备 + 满射）。
