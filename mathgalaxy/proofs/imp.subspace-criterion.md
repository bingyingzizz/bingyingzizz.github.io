# 子空间的定义 $\implies$ 两条判据与生成
`imp.subspace-criterion` · 推出 · strong 边 · 根 `../`

`def.subspace` 子空间 → `prop.subspace-criterion` 子空间判据

**合并版。**

($\implies$) 设 $U$ 是子空间。$u, v \in U$、$c \in K$ 时 $cu \in U$（数乘封闭）且 $cu + v \in U$（加法封闭）。

($\Longleftarrow$) 设对一切 $u, v, c$ 有 $cu + v \in U$。取 $u = v$、$c = -1$ 得 $0 \in U$；取 $c = 1$ 得加法封闭；取 $v = 0$、$c$ 任意得数乘封闭（这里用到了 $0 \in U$，而它刚证过）。三条齐备，$U$ 是子空间。

> 续见 proofs/imp.subspace-criterion.2.md
