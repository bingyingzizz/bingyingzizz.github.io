# $\mathbb{Q}/\mathbb{Z}$ 内射 + 一个伴随 $\implies$ 足够多内射
`imp.enough-injectives` · 推出 · strong 边 · 根 `../`

`thm.pid-injective-divisible` 内射等价于可除 + `thm.baer-criterion` 内射的理想判据 → `thm.mod-enough-injectives` 足够多内射对象

**（二）嵌入内射 $R$-模。** $m \mapsto (r \mapsto r m)$ 给出单射 $M \hookrightarrow \operatorname{Hom}_{\mathbb{Z}}(R, M)$（取 $r = 1$ 复原 $m$）。由（一）取内射 $\mathbb{Z}$-模 $E \supseteq M$，则 $\operatorname{Hom}_{\mathbb{Z}}(R, -)$ 作用后仍单（它保单射：作为右伴随它保极限，而核是极限），得到 $R$-模单射
$$M \hookrightarrow \operatorname{Hom}_{\mathbb{Z}}(R, M) \hookrightarrow \operatorname{Hom}_{\mathbb{Z}}(R, E).$$

> 续见 proofs/imp.enough-injectives.3.md
