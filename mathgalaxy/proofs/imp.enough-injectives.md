# $\mathbb{Q}/\mathbb{Z}$ 内射 + 一个伴随 $\implies$ 足够多内射
`imp.enough-injectives` · 推出 · strong 边 · 根 `../`

`thm.pid-injective-divisible` 内射等价于可除 + `thm.baer-criterion` 内射的理想判据 → `thm.mod-enough-injectives` 足够多内射对象

**（一）$\mathbb{Q}/\mathbb{Z}$ 是内射 $\mathbb{Z}$-模且是余生成元。** 内射性由 `thm.pid-injective-divisible`（可除即内射）给出。余生成元：给定 $0 \ne a \in A$，$\langle a \rangle$ 是循环群（$\cong \mathbb{Z}/m$ 或 $\cong \mathbb{Z}$），它上面存在非零特征标 $\langle a \rangle \to \mathbb{Q}/\mathbb{Z}$，再用内射性延拓到 $A$ ✓。故求值映射 $A \to A^{\vee\vee}$ 单。

> 续见 proofs/imp.enough-injectives.2.md
