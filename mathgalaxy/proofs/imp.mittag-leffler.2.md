# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

**第一步：先排成一个没有聚点的序列。** 假设里 $\{a_k\}$ 在 $\Omega$ 内没有聚点，把它用**紧集穷竭**列出来：取紧集 $K_{n}\nearrow\Omega$（$\bigcup_{n}K_{n}=\Omega$），每个 $K_{n}$ 里只含有限多个 $a_{k}$（没有聚点），于是按「首次进入 $K_{n}$ 的次序」就能列成 $a_{1},a_{2},\ldots$。（若序列有限，直接减去有限和即可，没有收敛问题。）⚠️ **不能按 $\lvert a_{k}\rvert$ 排序**：$\Omega=\{\,0<\lvert z\rvert<1\,\}$、$a_{k}=\frac{1}{k+1}$ 在 $\Omega$ 内没有聚点，却根本没有模最小的那一个。

> 续见 proofs/imp.mittag-leffler.3.md
