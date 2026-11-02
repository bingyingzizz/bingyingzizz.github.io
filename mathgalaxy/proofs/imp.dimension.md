# 交换引理 $\implies$ 维数良定义
`imp.dimension` · 推出 · strong 边 · 根 `../`

`thm.steinitz` Steinitz 交换引理 → `thm.dimension` 维数良定义

设 $\mathcal{B}$ 与 $\mathcal{B}'$ 是 $V$ 的两组基。

1. 由 $\mathcal{B}$ 是基，它线性无关；由 $\mathcal{B}'$ 是基，它生成 $V$。于是由交换引理（取 $S = \mathcal{B}$、$T = \mathcal{B}'$）得 $|\mathcal{B}| \le |\mathcal{B}'|$。
2. 交换两者的角色（$S = \mathcal{B}'$、$T = \mathcal{B}$）得 $|\mathcal{B}'| \le |\mathcal{B}|$。
3. 由 Bernstein 定理（或直接用两个方向的单射）得 $|\mathcal{B}| = |\mathcal{B}'|$。

于是映射 $\mathcal{B} \mapsto |\mathcal{B}|$ 不依赖基的选取，$\dim_K V := |\mathcal{B}|$ 是良定义的。∎

> 续见 proofs/imp.dimension.2.md
