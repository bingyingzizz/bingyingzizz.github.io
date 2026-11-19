# imp.lp-reflexive
`imp.lp-reflexive` · 推出 · strong 边 · 根 `../`

`def.lp-norm` L^p 范数 + `def.reflexive-space` 自反空间 + `thm.riesz-representation-lp` Riesz 表示定理 → `cor.lp-reflexive` L^p 自反

**证明。** 设 $1 < p < \infty$，$q$ 是共轭指数（$\frac1p+\frac1q = 1$，于是也有 $1 < q < \infty$）。
- 由「$L^{p}$ 的对偶是 $L^{q}$」（Riesz 表示）：$(L^{p})^{*} \cong L^{q}$ ✓；
- 把同一条定理用在 $q$ 上：$(L^{q})^{*} \cong L^{p}$ ✓；
- 于是
$$(L^{p})^{**} \cong (L^{q})^{*} \cong L^{p},$$
即 $L^{p}$ **自反** ✓。∎

> 由 `thm.riesz-representation-lp`(L30) 推出；目标层已升到 L31，无 layer:false。
