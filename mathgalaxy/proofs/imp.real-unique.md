# $\mathbb{Q}$ 稠密 $\implies$ 完备有序域与 $\mathbb{R}$ 同构
`imp.real-unique` · 推出 · strong 边 · 根 `../`

`lem.archimedean` 阿基米德性质 + `def.real` 实数系 ℝ → `thm.real-unique` 完备有序域的唯一性

设 $K$ 是完备有序域，取 $K' := \mathbb{R}$（上面构造出来的那个）。分三步造出唯一的同构 $f : K \to \mathbb{R}$。

**① $\mathbb{Q}$ 的部分被唯一确定。** 任何保 $1$ 的域同态都把 $\mathbb{Z}$ 送到 $\mathbb{Z}'$：$n \mapsto n'$（加法与乘法都由 $1$ 递推地定出来），再取分式得 $\mathbb{Q} \to \mathbb{Q}'$，记作 $q \mapsto q'$。它保序（$q < r \implies r - q > 0 \implies (r-q)' > 0 \implies q' < r'$）。这一步没有选择的余地。

**② 用上确界把 $f$ 推广出去。** 对 $x \in K$ 定义

$$f(x) := \sup\{\, q' : q \in \mathbb{Q},\ q < x \,\} \in K'$$

这个上确界存在：集合非空（(i) 阿基米德性给出一个 $q < x$）且有上界（取 $r > x$，则所有 $q < x < r$ 满足 $q' < r'$）。于是 $f$ 是**保序**的：

> 续见 proofs/imp.real-unique.2.md
