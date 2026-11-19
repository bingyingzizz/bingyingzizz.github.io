# imp.cohomology-of-coproduct
`imp.cohomology-of-coproduct` · 推出 · strong 边 · 根 `../`

`def.sheaf-cohomology` 层上同调 + `def.abelian-sheaf` 阿贝尔层 → `prop.cohomology-of-coproduct` 上同调与不交并

**证明。** 取 $M$ 的**内射消解** $I^{\bullet}$ ✓。截面函子把不交并送成**积**：
$$\Gamma\Bigl(\coprod_{i} X_{i},\ -\Bigr) \;=\; \prod_{i} \Gamma(X_{i},\ -) ✓$$
（从余积出发的映射恰是一族相容的映射；等价地，$\Gamma(X, -) = \operatorname{Hom}(h_{X}, -)$ 而 $h$ 保余积。）于是
$$\Gamma\Bigl(\coprod_{i} X_{i},\ I^{\bullet}\Bigr) = \prod_{i} \Gamma(X_{i},\ I^{\bullet}) ✓$$
在 $\mathbf{Ab}$ 里**积是正合的**，所以逐项取积不影响上同调的计算：
$$H^{n}\Bigl(\Gamma\bigl(\coprod_{i} X_{i},\ I^{\bullet}\bigr)\Bigr) \cong \prod_{i} H^{n}\bigl(\Gamma(X_{i},\ I^{\bullet})\bigr) = \prod_{i} H^{n}(X_{i},\ M) ✓$$
（每个 $\Gamma(X_{i}, I^{\bullet})$ 都算 $H^{n}(X_{i}, M)$：$I

> 续见 proofs/imp.cohomology-of-coproduct.2.md
