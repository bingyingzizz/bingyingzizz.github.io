# imp.sylvester-law-inertia
`imp.sylvester-law-inertia` · 推出 · strong 边 · 根 `../`

`def.inertia-index` 惯性指数 + `def.congruent-matrices` 合同矩阵 + `def.quadratic-form` 二次型 + `def.bilinear-form` 双线性型 → `thm.sylvester-law-inertia` 惯性定理

**合同分类**。合同是等价关系，且上面的论证表明合同变换保持 $(p, q)$：同阶实对称矩阵合同 $\iff$ 它们有相同的惯性指数。

**正定性**。$p = n$ 时 $D = I$，$A = Q^{-T}Q^{-1}$ 正定。反之设 $A$ 正定而 $D$ 有非正方向（$q > 0$ 或 $z > 0$）：取 $z \ne 0$ 使 $z^{T}Dz \le 0$，令 $x := Qz \ne 0$，则 $x^{T}Ax = z^{T}Dz \le 0$，与正定性矛盾；故 $q = z = 0$，$p = n$ ✓。∎
