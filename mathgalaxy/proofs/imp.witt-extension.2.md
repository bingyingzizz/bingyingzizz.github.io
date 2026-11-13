# 对子空间维数归纳延拓等距
`imp.witt-extension` · 推出 · strong 边 · 根 `../`

`def.isometry` 等距与正交变换 + `def.orthogonal-complement` 正交补 + `def.isotropic-vector` 迷向向量 + `lem.equal-norm-isometry` 等长向量由反射互达 → `lem.witt-extension` Witt 延拓引理

**归纳。** $\sigma_0:=\sigma|_{A_0}$ 是到 $\sigma(A_0)$ 的等距，$A_0$ 非退化、维数更小；归纳假设把它延拓为等距 $\tau:N\to N$。令 $x=\tau(a)$、$y=\sigma(a)$。则 $q(x)=q(a)=q(y)\ne0$。对 $u\in A_0$，$\beta(x-y,\sigma(u))=\beta(\tau(a),\tau(u))-\beta(\sigma(a),\sigma(u))=\beta(a,u)-\beta(a,u)=0$，故 $x-y\in M:=\sigma(A_0)^{\perp}$；又 $x,y\in M$（$\tau,\sigma$ 都是等距）。

> 续见 proofs/imp.witt-extension.3.md
