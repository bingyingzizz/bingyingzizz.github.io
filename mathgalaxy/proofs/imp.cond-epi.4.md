# 满态射在自由空间上逐点检验
`imp.cond-epi` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `prop.free-projective` 自由紧 Haus 是投射对象 + `prop.chaus-quotient-of-free` 紧 Haus 是自由的商 → `prop.cond-epi` 凝聚态集满态射的判据

**($\implies$)** 设 $p$ 满，取 $F=\beta I$ 与 $y\in Y(F)$。引理给有限覆盖 $\{u_i:F_i\to F\}$ 与 $x_i\in X(F_i)$。令 $U=\coprod_i F_i$，$q:U\to F$ 为联合映射（满）。把 $x_i$ 拼成 $x\in X(U)\cong\prod_i X(F_i)$，则 $p(x)=q^{*}(y)$。由 `prop.free-projective`，$\beta I$ 在 $\mathbf{CHaus}$ 中对满射投射，故 $q$ 有截面 $s:F\to U$。令 $x_F=s^{*}(x)\in X(F)$，则 $p(x_F)=s^{*}q^{*}(y)=y$。于是 $X(F)\to Y(F)$ 满。∎

> 续见 proofs/imp.cond-epi.5.md
