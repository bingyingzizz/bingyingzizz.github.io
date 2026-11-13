# 对子空间维数归纳延拓等距
`imp.witt-extension` · 推出 · strong 边 · 根 `../`

`def.isometry` 等距与正交变换 + `def.orthogonal-complement` 正交补 + `def.isotropic-vector` 迷向向量 + `lem.equal-norm-isometry` 等长向量由反射互达 → `lem.witt-extension` Witt 延拓引理

**在正交补里修正。** $\sigma(A_0)$ 非退化，$N$ 非退化，故 $M$ 非退化。由 `lem.equal-norm-isometry`，存在 $M$ 的等距 $\rho$ 使 $\rho(x)=y$。把 $\rho$ 与 $\operatorname{id}_{\sigma(A_0)}$ 在正交分解 $N=\sigma(A_0)\perp M$ 下拼成等距 $\tilde\rho:N\to N$。则 $\tilde\rho\circ\tau$ 是 $N$ 的等距，在 $A_0$ 上与 $\sigma$ 一致，并把 $a$ 送到 $\tilde\rho(x)=y=\sigma(a)$；所以它是 $\sigma$ 在 $A$ 上的延拓。归纳完成。$\blacksquare$
